
function Task(props) {
    function handleCheck(event) {
      const checkbox = event.target; 
      const checked = checkbox.checked; 
      console.log(checked);

      if (checked) {
        checkbox.parentElement.classList.add("done");
      } else {
        checkbox.parentElement.classList.remove("done"); 
      }
    }

    return (
      <li className={ props.imp ? "task important" : "task"}>
        <h3>{ props.taskName }</h3>
        <p>{ props.desc }</p> 
        <p>SUM =  100 + 200 </p>
        <input onChange={handleCheck} type="checkbox"></input>
      </li>
    );
}

export default Task; 