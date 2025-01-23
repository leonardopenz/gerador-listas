const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/api/register", (req, res) => {
  const newUser = req.body;

  const usersFilePath = path.join(__dirname, "public", "users.json");

  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Erro ao ler o arquivo de usuários" });
    }

    const users = JSON.parse(data);

    // Encontrar o maior ID atual e incrementar
    const maxId = users.length ? Math.max(...users.map((user) => user.id)) : 0;
    newUser.id = maxId + 1;

    users.push(newUser);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Erro ao escrever no arquivo de usuários" });
      }

      res.status(200).json({ message: "Usuário registrado com sucesso!", newUser });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
