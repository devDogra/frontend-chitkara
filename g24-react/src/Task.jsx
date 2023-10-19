import { useState, useRef } from 'react';

function Task(props) {
    // let taskdone = false; 
   let [taskdone, setTaskdone] = useState(false);
   const taskRef = useRef(null);

    function handleCheck(event) {
      const checkbox = event.target; 
      const checked = checkbox.checked; 
      // taskdone = checked; 
      setTaskdone(checked); 
    }

    function getClasses() {
        let classes = [ "task" ];
        if (props.imp) classes.push("important"); 
        if (taskdone) classes.push("done"); 
        // classes = [ "task", "important", "done"]
        //             "task important done"
        return classes.join(" "); 
    }

    function handleDelete(event) {
        // const btn = event.target; 
        // const li = btn.parentElement; 
        const li = taskRef.current;
        li.remove();
    }

    return (
      <li ref={taskRef} className={getClasses()}>
        <h3>{ props.taskName }</h3>
        <p>{ props.desc }</p> 
        <p>SUM =  100 + 200 </p>
        <input onChange={handleCheck} type="checkbox"></input>
        <button onClick={handleDelete}>DELETE</button>
      </li>
    );
}

export default Task; 