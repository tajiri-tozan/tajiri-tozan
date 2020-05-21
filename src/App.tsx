import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RootRouter from "pages";

function App() {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
