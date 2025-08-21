import { useState } from "react";
import { useImmer } from "use-immer";

function Task() {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useImmer<string[]>([]);

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
      <h1>List Task</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
