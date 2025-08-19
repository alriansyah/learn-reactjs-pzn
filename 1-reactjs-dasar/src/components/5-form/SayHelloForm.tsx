function SayHelloForm() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) : void {
    e.preventDefault();
    const name = (document.getElementById("input_name") as HTMLInputElement).value;
    (document.getElementById("text_hello") as HTMLHeadingElement).innerText = `Hello ${name}`;
  }

  return (
    <div>
      <form>
        <input id="input_name" />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
}

export default SayHelloForm;
