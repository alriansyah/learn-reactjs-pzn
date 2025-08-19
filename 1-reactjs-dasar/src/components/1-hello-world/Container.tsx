import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "fit-content",
      }}
    >
      <h1>Programmer Zaman Now</h1>
      {children}
      <footer>
        <p>2025 Programmer Zaman Now</p>
      </footer>
    </div>
  );
}

export default Container;
