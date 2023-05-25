import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./style/globalStyles.jsx";
import { BrowserRouter } from "react-router-dom";
import { FontStyle } from "./style/fontStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <FontStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
