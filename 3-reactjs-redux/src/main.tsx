import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./redux/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

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
