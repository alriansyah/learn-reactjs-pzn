export interface NoteType {
  id: number;
  text: string;
  done: boolean;
}

export interface NoteProps {
  note: NoteType;
  onChange: (note: NoteType) => void;
  onDelete: (note: NoteType) => void;
}

export interface NoteListProps {
  notes: NoteType[];
  onChange: (note: NoteType) => void;
  onDelete: (note: NoteType) => void;
}
