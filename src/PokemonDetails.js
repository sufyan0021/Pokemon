import React, { useContext, useState, useEffect } from 'react';
import PokemonContextProvider from './contexts/PokemonContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const PokemonDetails = (props) => {

    console.log(props.location && props.location.state.url);
    const [pokeDetState, setpokeDetState] = useState({
        loading: false,
        abilities: [],
        base_experience: null,
        moves: [],
        weight: null
    });

    useEffect(() => {
        axios.get(props.location.state.url)
            .then(response => {
                console.log(response);
                setpokeDetState({ loading: false, abilities: response.data.abilities, base_experience: response.data.base_experience, moves: response.data.moves, weight: response.data.weight });
            });
    }, [])

    return (
        <Card>
            <Card.Header>PokeMon Details</Card.Header>
            <Card.Body>
                <Card.Title>Abilities</Card.Title>
                {pokeDetState.abilities && pokeDetState.abilities.map((abilityObj) => {
                    return (
                        <Card.Text>
                            {abilityObj.ability.name}
                        </Card.Text>)
                })}
                <Card.Title>Base Experience</Card.Title>
                <Card.Text>
                    {pokeDetState.base_experience}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PokemonDetails