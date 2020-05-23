import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactGenieAnimations } from "react-genie-styled-components";
import "./App.css";
import RootRouter from "pages";

function App() {
  return (
    <BrowserRouter>
      <ReactGenieAnimations />
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
