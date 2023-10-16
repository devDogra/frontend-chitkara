import "./App.css"
import Task from "./Task";

function App() {
  const tasks = [
    { taskName: "Study", important: true, id: 100 },
    { taskName: "Shopping", important: false, id: 101 },
    { taskName: "Work out", important: true, id: 102 },
  ]
  return (
    <>
      <h1>Todo List</h1>
      <ul>
          {
              tasks.map(taskObj => {
                return <Task 
                    taskName={taskObj.taskName} 
                    important={taskObj.important}
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