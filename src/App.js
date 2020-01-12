import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSum from './PokemonSum';
import PageNumberRender from './PageNumberRender';
import PokemonContextProvider from './contexts/PokemonContext';
//import PokemonDetContextProvider from './contexts/PokemonDetContext';
import { PokemonContext } from './contexts/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonDetails from './PokemonDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <Router>
          <Switch>
            <Route path="/pokemon" component={PokemonDetails} />
            <Route path="/" render={(props) => {
              return <div>
                <PokemonSum {...props} />
                <PageNumberRender {...props} />
              </div>
            }} />
          </Switch>
        </Router>

      </PokemonContextProvider>
    </div>
  );
}

export default App;