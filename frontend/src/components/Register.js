import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    //const newUser = { username, password };

    try {
      const usersCollection = collection(db, "users");

      await addDoc(usersCollection, {
        username,
        password,
      });

      setMessage("Usuário registrado com sucesso!");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Erros ao registrar usuário", error);
      setMessage("Erro na comunicação com o servidor.");
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Nome de usuário:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
