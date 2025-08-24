import { useImmerReducer } from "use-immer";
import type { NoteType } from "./type";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;

const initialNotes: NoteType[] = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn ReactJS", done: false },
];

type NoteAction =
  | { type: "ADD_NOTE"; text: string }
  | { type: "CHANGE_NOTE"; id: number; text: string; done: boolean }
  | { type: "DELETE_NOTE"; id: number };

// function notesReducer(notes: NoteType[], action: NoteAction): NoteType[] {
//   switch (action.type) {
//     case "ADD_NOTE": {
//       return [...notes, { id: id++, text: action.text, done: false }];
//     }
//     case "CHANGE_NOTE": {
//       return notes.map((note) => {
//         return note.id === action.id
//           ? { ...note, text: action.text, done: action.done }
//           : note;
//       });
//     }
//     case "DELETE_NOTE": {
//       return notes.filter((note) => note.id !== action.id);
//     }
//     default: {
//       return notes;
//     }
//   }
// }

function notesReducer(notes: NoteType[], action: NoteAction): void {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text: string): void {
    dispatch({ type: "ADD_NOTE", text });
  }

  function handleChangeNote(note: NoteType): void {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(note: NoteType): void {
    dispatch({ type: "DELETE_NOTE", id: note.id });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default NoteApp;
