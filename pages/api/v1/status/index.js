import database from "@/infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  try {
    const databaseVersionResult = await database.query({
      text: "SHOW server_version;",
    });

    const databaseVersionValue = databaseVersionResult.rows[0].server_version;

    const databaseMaxConnectionsResult = await database.query({
      text: "SHOW max_connections;",
    });

    const databaseMaxConnectionsValue =
      databaseMaxConnectionsResult.rows[0].max_connections;

    const databaseName = process.env.POSTGRES_DB;

    const databaseOpenedConnectionsResult = await database.query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    });

    const databaseOpenedConnectionsValue =
      databaseOpenedConnectionsResult.rows[0].count;

    response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: Number(databaseVersionValue),
          max_connections: parseInt(databaseMaxConnectionsValue),
          opened_connections: databaseOpenedConnectionsValue,
        },
      },
    });
  } catch (error) {

    // olhe o console
    console.error("Erro ao obter informações do banco de dados:", error);
    response
    //   .status(500)
    .json({ error: "Erro ao obter informações do banco de dados => ", error });
  }
}

export default status;
