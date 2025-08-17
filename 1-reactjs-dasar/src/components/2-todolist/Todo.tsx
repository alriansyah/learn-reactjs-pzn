interface TodoProps {
  text: string;
  isCompleted: boolean;
  isDeleted?: boolean;
}

function Todo({ text, isCompleted, isDeleted = false }: TodoProps) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {isCompleted ? <del>{text}</del> : text} {isCompleted && "✅"}
      </li>
    );
  }
}

export default Todo;
