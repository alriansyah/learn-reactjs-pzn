export interface NoteType {
  id: number;
  text: string;
  done: boolean;
}

export interface NoteProps {
  note: NoteType;
}

export interface NoteListProps {
  notes: NoteType[];
  onChange: (note: NoteType) => void;
  onDelete: (note: NoteType) => void;
}

export type NoteAction =
  | { type: "ADD_NOTE"; text: string }
  | { type: "CHANGE_NOTE"; id: number; text: string; done: boolean }
  | { type: "DELETE_NOTE"; id: number };
