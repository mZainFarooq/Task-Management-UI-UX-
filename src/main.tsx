import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Task-Management-UI-UX-/">
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
