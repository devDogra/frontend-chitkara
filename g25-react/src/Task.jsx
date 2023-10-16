function Task(props) {

 
    function handleChange(event) {
      console.log("Changed"); 
      const checked = event.target.checked;
      console.log(checked); 
      const li = event.target.parentElement; 

      if (checked) {
        li.classList.add("done"); 
      } else {
        li.classList.remove("done"); 
      }

    }

    return (
      <li className={ props.important ? "task important" : "task"}>
        <h2>{ props.taskName }</h2>
        <input type="checkbox" onChange={handleChange}></input>
      </li>
    );
}
export default Task; 