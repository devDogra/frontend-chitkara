import { useRef, useState } from 'react'

function Task(props) {
    // let taskdone = false;
    let [taskdone, setTaskdone] = useState(false);
    const taskRef = useRef(null)

    function handleChange(event) {
      const checked = event.target.checked;
      // taskdone = checked; 
      setTaskdone(checked);
    }
    function handleDelete(event) {
      const li = taskRef.current
      li.remove();
    }

    function getClasses() {
      let classes = [ "task" ];
      if (props.important) classes.push("important");
      if (taskdone) classes.push("done");
      // ["task", "important", "done"];
      // "task important done"
      return classes.join(" ");

    }

    return (
      <li ref={taskRef} className={getClasses()}>
        <h2>{ props.taskName }</h2>
        <input type="checkbox" onChange={handleChange}></input>
        <button onClick={handleDelete}>DELETE</button>
      </li>
    );
}
export default Task; 