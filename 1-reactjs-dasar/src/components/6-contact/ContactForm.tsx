import { useImmer } from "use-immer";

interface ContactData {
  name: string;
  message: string;
}

function ContactForm() {
  const [contact, setContact] = useImmer<ContactData>({
    name: "",
    message: "",
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </div>
  );
}

export default ContactForm;
