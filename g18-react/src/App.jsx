import "./App.css"
import Task from "./Task";

function App() {
  const myName = "Dev"; 
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>

      <ul>
        <Task 
          taskname="Study" 
          desc="Study at 8PM"
          importance={10+10}
        >
        </Task>

        <Task 
          taskname="Sleep" 
          desc="Sleep at 9PM"
        >
        </Task>
      </ul>
    </>
  );
}

export default App; 