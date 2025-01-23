import React, { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Referência à coleção "users"
      const usersCollection = collection(db, "users");
      // Consulta para encontrar o usuário correspondente
      const q = query(usersCollection, where("username", "==", username), where("password", "==", password));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("Login bem-sucedido!");
        // Lógica adicional após login (ex: redirecionamento)
      } else {
        setMessage("Nome de usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMessage("Erro ao fazer login.");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
