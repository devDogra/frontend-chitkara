import "./App.css"
import Task from "./Task";

function App() {
  let tasks = [
    { id: 101, taskName: "Study", desc: "Study at 8PM", imp: false },
    { id: 102, taskName: "Sleep", desc: "Sleep at 10PM", imp: true },
    { id: 103, taskName: "Workout", desc: "Workout at 10AM", imp: false },
  ]

    
  return (
    <>
      <h1>Todo List</h1>
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