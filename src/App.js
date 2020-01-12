import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSum from './PokemonSum';
import PageNumberRender from './PageNumberRender';
import PokemonContextProvider from './contexts/PokemonContext';
import { PokemonContext } from './contexts/PokemonContext';

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