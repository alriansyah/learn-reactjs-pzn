import { useState } from "react";
import type { NoteProps } from "./type";

function Note({ note, onChange, onDelete }: NoteProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  let component;

  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e: React.ChangeEvent<HTMLInputElement>) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}

export default Note;
