import { useState } from "react";

function Task(props) {
    // let taskDone = false; 
    let [taskDone, setTaskDone] = useState(false)


    function handleCheck(event) {
      console.log("handleCheck");
      const checkbox = event.target.checked; 
      // taskDone = checkbox;
      setTaskDone(checkbox);
    }

    return (
      <li className={ taskDone ? "task done" : "task" }>
        <h3> { props.taskname } </h3>
        <p> { props.desc } </p>
        <p> IMPORTANCE - { props.importance } </p>
        <input type="checkbox" onChange={handleCheck}></input>
      </li>
    );
}
export default Task; 