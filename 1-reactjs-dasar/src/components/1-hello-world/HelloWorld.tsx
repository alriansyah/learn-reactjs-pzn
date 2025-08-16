function HeaderHelloWorld() {
  const text: string = "Hello World";

  return (
    <h1 style={{ color: "red", backgroundColor: "aqua" }}>
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text: string = "Selamat Belajar ReactJS dari Programmer Zaman Now";
  const style = { color: "blue", backgroundColor: "yellow" };

  return <p style={style}>{text.toLowerCase()}</p>;
}

function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

export default HelloWorld;
