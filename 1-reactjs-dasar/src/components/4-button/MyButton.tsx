interface MyButtonProps {
  text: string;
  onSmash: () => void;
}

function MyButton({ text, onSmash }: MyButtonProps) {
  return <button onClick={onSmash}>{text}</button>;
}

export default MyButton;
