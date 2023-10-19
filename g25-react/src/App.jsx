import "./App.css"
import Task from "./Task";
import { useEffect, useState } from 'react';

function App() {
  const [ tasks, setTasks ] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data.todos); 
        setTasks(data.todos);
      })
  }, [])


  return (
    <>
      <h1>Todo List</h1>
      <ul>
          {
              tasks.map(taskObj => {
                return <Task 
                    taskName={taskObj.todo} 
                    important={taskObj.completed}
                    key={taskObj.id}
                    >
                  </Task>
              })
          }
      </ul>
    </>
  );
}
export default App; 