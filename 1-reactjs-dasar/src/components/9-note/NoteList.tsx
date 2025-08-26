import { useContext } from "react";
import { NotesContext } from "./NoteContext";
import type { NoteType } from "./type";
import Note from "./Note";

function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <div>
      <ul>
        {notes.map((note: NoteType) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
