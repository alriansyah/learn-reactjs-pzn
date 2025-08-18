import Todo from "./Todo";

function TodoList() {
  interface TodoData {
    id: number;
    text: string;
    isCompleted: boolean;
    isDeleted?: boolean;
  }

  const data: TodoData[] = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn ReactJS",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Learn ReactJS Router",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
