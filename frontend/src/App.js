import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function Home() {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <p>Escolha uma opção: </p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Cadastro</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
