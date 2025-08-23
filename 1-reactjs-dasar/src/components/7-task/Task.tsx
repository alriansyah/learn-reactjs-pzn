import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Task() {
  const [items, setItems] = useImmer<string[]>([]);

  return (
    <div>
      <TaskForm setItems={setItems} />
      <TaskList items={items} />
    </div>
  );
}

export default Task;
