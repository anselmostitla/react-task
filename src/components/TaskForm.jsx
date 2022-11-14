import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-slate-800 px-5 mb-4 py-5 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white pb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu nueva tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className = "bg-slate-300 px-3 py-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className = "bg-slate-300 px-3 py-3 w-full mb-2"
        />

        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
