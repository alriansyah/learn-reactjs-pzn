import Todo from "./Todo";

function TodoList() {
  return (
    <u>
      <Todo isCompleted={true} text="Learn HTML" isDeleted />
      <Todo isCompleted={true} text="Learn CSS" />
      <Todo isCompleted={true} text="Learn JavaScript" />
      <Todo isCompleted={false} text="Learn ReactJs" />
    </u>
  );
}

export default TodoList;
