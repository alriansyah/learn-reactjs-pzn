import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

function NoteForm() {
  const [text, setText] = useState<string>("");
  const dispatch = useContext(NotesDispatchContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  return (
    <>
      <input placeholder="Add Note" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default NoteForm;
