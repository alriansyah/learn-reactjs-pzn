import { useContext, useMemo, useRef, useState } from "react";
import { NotesContext } from "./NoteContext";
import type { NoteType } from "./type";
import Note from "./Note";

function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const filteredNotes = useMemo(() => {
    console.info("Filtering notes");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.info("Search");
    if (searchInputRef.current) {
      setSearch(searchInputRef.current.value);
    }
  }

  function handleRenderButton() {
    setRender(!render);
  }

  console.log("Render Note List");

  return (
    <div>
      <input ref={searchInputRef} placeholder="Search" />
      <button onClick={handleSearch}>Search</button>
      <br />
      <button onClick={handleRenderButton}>Render</button>
      <ul>
        {filteredNotes.map((note: NoteType) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
