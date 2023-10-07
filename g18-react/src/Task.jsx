function Task(props) {
    return (
      <li className="task">
        <h3> { props.taskname } </h3>
        <p> { props.desc } </p>
        <p> IMPORTANCE - { props.importance } </p>
        <input type="checkbox"></input>
      </li>
    );
}
export default Task; 