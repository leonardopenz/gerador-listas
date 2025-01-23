import React from "react";
import Task from "./Task";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>Não há tarefas.</p>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />)
      )}
    </div>
  );
}

export default TaskList;
