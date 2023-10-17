import { useRef, useState } from "react";

function Task(props) {
    // let taskDone = false; 
    let [taskDone, setTaskDone] = useState(false)
    const taskRef = useRef(null);

    function handleCheck(event) {
      console.log("handleCheck");
      const checkbox = event.target.checked; 
      // taskDone = checkbox;
      setTaskDone(checkbox);
    }
    function handleDelete(event) {
        const task = taskRef.current; 
        task.remove();
    }

    return (
      <li ref={taskRef} className={ taskDone ? "task done" : "task" }>
        <h3> { props.taskName } </h3>
        <p> { props.desc } </p>
        <p> IMPORTANCE - { props.importance } </p>
        <input type="checkbox" onChange={handleCheck}></input>
        <button onClick={handleDelete}>DELETE</button>
      </li>
    );
}
export default Task; 