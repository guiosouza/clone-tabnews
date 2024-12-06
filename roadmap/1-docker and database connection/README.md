# 🐘 Resolvendo Conexão do Banco com o Docker

### Aula 72 - Registro de Aprendizado 🚀

---

## 📖 Sobre a Aula

Esta aula foi um grande aprendizado sobre como lidar com problemas práticos ao configurar o PostgreSQL em diferentes ambientes. Aprendi que **\"que encarar problemas também é uma forma de aprender\"**,. Tive que parar a aula (ansiedade de avançar), para tentar arrumar algumas buchas.

---

## ⚙️ Problemas Enfrentados e Soluções

### 1. **Diferença entre Sistemas Operacionais**
O professor utilizava uma máquina virtual Linux (Code Spaces do GitHub) enquanto meu ambiente é Windows. Isso gerou alguns conflitos, principalmente na instalação e nos comandos para configurar o PostgreSQL.

**Solução:** Instalei o PostgreSQL no Windows e validei os comandos de terminal.

---

### 2. **Instalação e Configuração do PostgreSQL**
- Após instalar o PostgreSQL, os comandos ainda não funcionavam. 
- Usei:
  \`\`\`bash
  psql --version
  \`\`\`
  Para testar se o terminal reconhecia o \`psql\`, percebi que era necessário configurar o **Path** nas variáveis de ambiente do sistema.

**Passos:**
1. Instalei o PostgreSQL para Windows.
2. Adicionei o diretório binário do PostgreSQL ao \`Path\` nas variáveis de ambiente:
   - Exemplo: \`C:\\Program Files\\PostgreSQL\\<versão>\\bin\`
3. Após isso, o comando \`psql --version\` passou a funcionar corretamente.

---

### 3. **Conflito de Portas no Docker**
- Durante a instalação, configurei o PostgreSQL no Windows para usar a porta padrão \`5432\`. Porém, essa porta já estava em uso pelo contêiner do Docker.

**Solução:**
1. Alterei a porta do serviço no arquivo \`docker-compose.yml\`:
   \`\`\`yaml
   services: 
     database:
       image: 'postgres:16.0-alpine3.18'
       environment:
         POSTGRES_PASSWORD: 'local_password'
       ports:
         - '5433:5432'  
   \`\`\`
2. A porta \`5433\` foi configurada no host, enquanto o contêiner manteve a porta padrão \`5432\`.

---

## 🛠️ Comandos Úteis

### Verificar se o Docker está rodando:
\`\`\`bash
docker ps
\`\`\`

### Testar a versão do PostgreSQL:
\`\`\`bash
psql --version
\`\`\`

---

## 🔍 Próximos Passos
. Arrumar uma maneira de deixar vários comandos em um arquivo só.

---

## 💡 Lição Aprendida
- **Tive que aprender na marra a ter MUITA paciência para configurar ambientes.**

---

## 🙌 Agradecimentos

Agradeço ao professor e à comunidade que estão sempre me dando aquele gás. Porque o negócio aqui é pancada atrás de pancada... e até que estou gostando! 🚀
