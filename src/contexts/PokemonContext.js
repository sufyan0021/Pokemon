import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [state, setState] = useState([{
        pokemons: null,
        total: null,
        per_page: null,
        current_page: null,
    }]);

    const handleCurrentPage = (pageNum) => {
        setState({ current_page: pageNum })
        makeHttpRequestWithPage(state.current_page)
    }

    const makeHttpRequestWithPage = (pageNumber) => {
        axios.get(`http://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}`)
            .then(response => {
                setState({ pokemons: response.data.results, total: response.data.count, per_page: 20, current_page: pageNumber });
            });
    }

    useEffect(() => {
        makeHttpRequestWithPage(0);
    }, [])

    return (
        <PokemonContext.Provider value={{ ...state, handleCurrentPage }}>
            {props.children}
        </PokemonContext.Provider>
    );

}

export default PokemonContextProvider;