import { useRef } from "react";

interface AlertButtonProps {
  text: string;
  message: string;
}

function AlertButton({ text, message }: AlertButtonProps) {
  const counter = useRef<number>(0);
  console.log(`counter: ${counter.current}`);
  

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(e);
    alert(`${message} ${counter.current++}`);
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default AlertButton;
