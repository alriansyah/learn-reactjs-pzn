import React from "react";

interface AlertButtonProps {
  text: string;
  message: string;
}

function AlertButton({ text, message }: AlertButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(e);
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default AlertButton;
