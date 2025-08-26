import { createContext } from "react";
import type { NoteType, NoteAction } from "./type";

export const NotesContext = createContext<NoteType[]>([]);
export const NotesDispatchContext = createContext<React.Dispatch<NoteAction>>(
  () => {
    console.log("Default dispatch function");
  }
);
