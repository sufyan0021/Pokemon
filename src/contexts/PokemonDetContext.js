import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { PokemonContext } from './PokemonContext';

export const PokemonDetContext = createContext();

const PokemonDetContextProvider = (props) => {

    const { pokemons } = useContext(PokemonContext);

    const [pokeDetState, setState] = useState([{
        loading: false,
        abilities: [],
        base_experience: null,
        id: null,
        moves: [],
        weight: null
    }]);

    const makeHttpRequestWithDetPage = (id) => {
        setState({ ...pokeDetState, loading: true });
        axios.get(id)
            .then(response => {
                console.log(response);
                //setState({ loading: false, abilities: response.data.results, base_experience: response.data.results, id: response.data.count, moves: 20, weight: pageNumber });
            });
    }
    return (
        <PokemonDetContext.Provider value={{ makeHttpRequestWithDetPage: makeHttpRequestWithDetPage }}>
            {props.children}
        </PokemonDetContext.Provider>
    );

}

export default PokemonDetContextProvider;