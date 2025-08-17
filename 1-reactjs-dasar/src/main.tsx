import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Container from "./components/1-hello-world/Container.tsx";
import HelloWorld from "./components/1-hello-world/HelloWorld.tsx";
import TodoList from "./components/2-todolist/TodoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
    </Container>
  </StrictMode>
);
