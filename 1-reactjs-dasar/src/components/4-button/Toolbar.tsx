interface ToolbarProps {
  onClick: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

function Toolbar({ onClick }: ToolbarProps) {
  return (
    <div onClick={onClick} style={{ backgroundColor: "yellow" }}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
}

export default Toolbar;
