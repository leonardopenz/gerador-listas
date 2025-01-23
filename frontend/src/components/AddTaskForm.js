import React, { useState } from "react";
import "./AddTaskForm.css";

function AddTaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      alert("A tarefa não pode estar vazia");
      return;
    }
    addTask(taskName);
    setTaskName(""); // Limpa o campo de texto
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Adicione uma nova tarefa" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTaskForm;
