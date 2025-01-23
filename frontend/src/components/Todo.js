import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => (task.id === task.id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask}></TaskList>
    </div>
  );
}

export default App;
