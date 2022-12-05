
import React from 'react';
import img5 from "./Img/img500.jpg"
import './App.css';
import Header from './module/header';
import Menu from './module/menu';
import Prestations from './module/prestations';

function App() {
  return (
    <div style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover", width: "auto", height: "100vh"}}>
   <p>ceci est un test pour verifir si cela fonctionne bien mais j espere que oui</p>
  </div>
  );
}

export default App;
