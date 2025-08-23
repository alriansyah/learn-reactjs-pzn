import { useState } from "react";
import type { Updater } from "use-immer";

interface TaskFormProps {
  setItems: Updater<string[]>;
}

function TaskForm({ setItems }: TaskFormProps) {
  const [item, setItem] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setItem(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setItems((draft) => {
      draft.push(item);
    });
    setItem("");
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
