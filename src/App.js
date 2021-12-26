
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponenteUseEffect from './components/ComponenteUseEffect';

function App() {
  const inicial = 1
  const max = 10
  return (
    <center>
      <Navbar />
      <ItemListContainer greeting="Hola soy Item list Container que vengo de App " />
      <ComponenteUseEffect inicial={inicial} max={max} />

    </center>
  );
}

export default App;
