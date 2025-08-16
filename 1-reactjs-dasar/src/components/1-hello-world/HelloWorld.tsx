import React from "react";

interface TextProps {
  text?: string;
}

function HeaderHelloWorld({ text = "Ups, lupa kasi teks" }: TextProps) {
  return (
    <h1 style={{ color: "red", backgroundColor: "aqua" }}>
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld({ text = "Ups, lupa kasi teks" }: TextProps) {
  const style: React.CSSProperties = {
    color: "blue",
    backgroundColor: "yellow",
  };

  return <p style={style}>{text.toLowerCase()}</p>;
}

function HelloWorld() {
  const props = {
    text: "Selamat Belajar ReactJS dari Programmer Zaman Now",
  };
  return (
    <div>
      <HeaderHelloWorld text="Hello World" />
      <ParagraphHelloWorld {...props} />
    </div>
  );
}

export default HelloWorld;
