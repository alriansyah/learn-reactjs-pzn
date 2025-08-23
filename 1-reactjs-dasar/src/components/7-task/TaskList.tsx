interface TaskFormProps {
  items: string[];
}

function TaskList({ items = [] }: TaskFormProps) {
  return (
    <div>
      <h1>List Task</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
