import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [state, setState] = useState({
        loading: false,
        pokemons: [],
        total: 0,
        per_page: 20
    });

    const makeHttpRequestWithPage = (pageNumber) => {
        setState({ ...state, loading: true });
        axios.get(`http://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}`)
            .then(response => {
                setState({ ...state, loading: false, pokemons: response.data.results, total: response.data.count });
            });
    }

    useEffect(() => {
        makeHttpRequestWithPage(0);
    }, [])

    return (
        <PokemonContext.Provider value={{ ...state, handleCurrentPage: makeHttpRequestWithPage }}>
            {props.children}
        </PokemonContext.Provider>
    );

}

export default PokemonContextProvider;