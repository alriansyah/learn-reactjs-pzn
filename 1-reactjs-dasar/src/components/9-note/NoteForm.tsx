import { useState } from "react";

interface NoteFormProps {
  onAddNote: (note: string) => void;
}

function NoteForm({ onAddNote }: NoteFormProps) {
  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    onAddNote(text);
  }

  return (
    <>
      <input placeholder="Add Note" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default NoteForm;
