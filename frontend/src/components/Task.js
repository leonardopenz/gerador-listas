import React from "react";
import "./Task.css"; // Estilo opcional

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.name}</span>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)}>{task.completed ? "Desfazer" : "Concluir"}</button>
        <button onClick={() => deleteTask(task.id)} className="btn-Excluir">
          Excluir
        </button>
      </div>
    </div>
  );
}

export default Task;
