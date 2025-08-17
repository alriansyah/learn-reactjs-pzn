import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Container from "./components/1-hello-world/Container.tsx";
import HelloWorld from "./components/1-hello-world/HelloWorld.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <HelloWorld />
    </Container>
  </StrictMode>
);
