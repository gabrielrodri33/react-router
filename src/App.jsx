import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      {/* Área imperativa */}
      <Menu/>

      <Outlet/>

      <Rodape/>
    </>
  );
}
export default App;