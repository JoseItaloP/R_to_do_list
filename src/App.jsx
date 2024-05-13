import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import Registrar from "./Login/Resgistrar";
import UseAuth from "./Hooks/UseAuth";

import "./App.css";


const Private = ({ Item }) => {
  const {signed} = UseAuth();
  return signed > 0 ? <Item /> : <Login />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Login />} />
            <Route exact path="/criar" element={<Registrar />} />
            <Route exact path="/menu" element={<Private Item={Menu} />} />
            <Route path="*" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
