import Note from "./Note";
import type { NoteType, NoteListProps } from "./type";

function NoteList({ notes, onChange, onDelete }: NoteListProps) {
  return (
    <div>
      <ul>
        {notes.map((note: NoteType) => (
          <li key={note.id}>
            <Note note={note} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
