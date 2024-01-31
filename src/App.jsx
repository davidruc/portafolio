import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from "./views/homeView/homeView";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomeView/>}/>
      </Routes>
    </BrowserRouter>
  )
};
