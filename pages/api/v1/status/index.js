function status(request, response) {
  response.status(200).json({ message: "Deu certo meu consagradão!" });
}

export default status;
