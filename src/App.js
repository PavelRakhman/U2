import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
//import of pages
import {FindAdd} from "./pages/FindAdd"
import {Watched} from "./pages/Watched"
//import of components
import {NavigationMenu} from "./components/NavigationMenu"
//import of styles
import "./styles.css"


function App() {
  return (
    <>
    
    <NavigationMenu></NavigationMenu>
    <div className="route-container">
   <Routes>
   <Route path="/FindAdd" element={<FindAdd></FindAdd>}></Route>
   <Route path="/Watched" element={<Watched></Watched>}></Route>
   </Routes>
    </div>
    
    </>
    
  
  
  );
}

export default App;
