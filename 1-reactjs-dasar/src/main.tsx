import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Container from "./components/1-hello-world/Container.tsx";
import HelloWorld from "./components/1-hello-world/HelloWorld.tsx";
import TodoList from "./components/2-todolist/TodoList.tsx";
import Table from "./components/3-table/Table.tsx";
import AlertButton from "./components/4-button/AlertButton.tsx";
import MyButton from "./components/4-button/MyButton.tsx";
import Toolbar from "./components/4-button/Toolbar.tsx";
import SearchForm from "./components/5-form/SearchForm.tsx";
import SayHelloForm from "./components/5-form/SayHelloForm.tsx";
import Counter from "./components/5-form/Counter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Click me" message="You click me" />
      <MyButton text="Smash me" onSmash={() => alert("You smash me")} />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar button clicked");
        }}
      />
      <SearchForm />
      <SayHelloForm />
      <Counter />
      <Counter />
    </Container>
  </StrictMode>
);
