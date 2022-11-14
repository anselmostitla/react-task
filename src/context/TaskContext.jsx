import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";


//Nombre del contexto
export const TaskContext = createContext();

//componente que va a englobar a todos
export function TaskContextProvider(props) {
  // Este es el estado
  const [tasks, setTasks] = useState([]);

  function createTask(title, description) {
    const newTask = {
      id: tasks.length,
      title: title,
      description: description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  // Aqui esta actualizando el estado
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
// Este es el que renderiza un componente de jsx
