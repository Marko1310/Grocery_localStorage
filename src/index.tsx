import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ContexWrapper } from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContexWrapper>
      <App />
    </ContexWrapper>
  </React.StrictMode>
);
