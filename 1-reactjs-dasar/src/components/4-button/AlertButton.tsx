interface AlertButtonProps {
  text: string;
  message: string;
}

function AlertButton({ text, message }: AlertButtonProps) {
  function handleClick(): void {
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default AlertButton;
