import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
createRoot(container).render(
  <Provider store={store}>
    <Routes>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Routes>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
