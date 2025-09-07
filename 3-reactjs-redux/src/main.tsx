import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

const store = null;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
