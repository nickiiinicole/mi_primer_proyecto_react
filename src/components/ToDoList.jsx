import { useState } from 'react';

function ToDoList() {
  const [task, setTask] = useState('');

  const showTask = () => {
    console.log("Tarea actual:", task);
    // Más adelante acá podrías agregarla a una lista
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Introduce task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={showTask}>Add task</button>
    </div>
  );
}

export default ToDoList;
