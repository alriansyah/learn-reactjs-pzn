interface GuestBookFormProps {
  ref: React.ForwardedRef<HTMLInputElement>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

function GuestBookForm({ ref, name, setName }: GuestBookFormProps) {
  return (
    <>
      <label htmlFor="name">Name</label> <br />
      <input
        ref={ref}
        type="text"
        name="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </>
  );
}

export default GuestBookForm;
