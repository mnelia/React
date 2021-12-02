import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola soy Item list Container que vengo de App " />
    </div>
  );
}

export default App;
