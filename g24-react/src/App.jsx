import "./App.css"
import Task from "./Task";
import { useState } from "react";

function App() {
  let initialtasks = [
    { id: 101, taskName: "Study", desc: "Study at 8PM", imp: false },
    { id: 102, taskName: "Sleep", desc: "Sleep at 10PM", imp: true },
    { id: 103, taskName: "Workout", desc: "Workout at 10AM", imp: false },
  ]
  let [tasks, setTasks] = useState(initialtasks)

  function addTask(event) {
    event.preventDefault();
    const form = event.target; 
    const data = new FormData(form);
    const taskName = data.get('taskName'); 
    const imp = data.get('imp'); 
    let taskObj = {
      id: Date.now(),
      taskName: taskName,
      imp: imp,
    }
    // tasks.push(taskObj);
    setTasks(tasks.concat(taskObj));

  }
    
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input placeholder="taskName" name="taskName"></input>
        <label htmlFor="">Important</label>
        <input type="checkbox" name="imp"></input>
        <button >Add Task</button>
      </form>
      <ul>
         {
            tasks.map((task) => {
              return <Task 
                  taskName={task.taskName} 
                  desc={task.desc}
                  imp={task.imp}
                  key={task.id}
                ></Task>
            })
         }
      </ul>
    </>

  );

}

export default App; 