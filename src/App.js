import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponenteUseEffect from './components/ComponenteUseEffect';

function App() {
  //const inicial = 1
  const max = 10
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola soy Item list Container que vengo de App " />
      <ComponenteUseEffect inicial={1} max={max} />

    </div>
  );
}

export default App;
