import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current?.focus();

    alert(`Name : ${name}, Message : ${message}`);
  }
  return (
    <>
      <h1>Guest Book</h1>
      <form>
        <GuestBookForm ref={nameInput} name={name} setName={setName} />
        <br />
        <label htmlFor="message">Message</label> <br />
        <textarea
          name="message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default GuestBook;
