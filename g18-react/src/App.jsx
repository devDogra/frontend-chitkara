import { useEffect, useState } from "react";
import "./App.css"
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log("Initial render");

    fetch("https://dummyjson.com/todos")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.todos); 
        setTasks(data.todos);
      })
    
  }, [])
 
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>

      <ul>
          {
            tasks.map((item) => {
              return <Task 
                  taskName={item.todo}
                  key={item.id}
                ></Task>
            })
          }
      </ul>
    </>
  );
}

export default App; 