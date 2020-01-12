import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSum from './PokemonSum';
import PageNumberRender from './PageNumberRender';
import PokemonContextProvider from './contexts/PokemonContext';
import PokemonDetContextProvider from './contexts/PokemonDetContext';
import { PokemonContext } from './contexts/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <PokemonSum />
        <PageNumberRender />
      </PokemonContextProvider>
    </div>
  );
}

export default App;