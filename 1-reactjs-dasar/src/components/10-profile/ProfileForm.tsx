interface ProfileFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

function ProfileForm({ name, setName }: ProfileFormProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <h2>Profile Form</h2>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}

export default ProfileForm;
