import React, { useContext } from 'react';
import PokemonContextProvider from './contexts/PokemonContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PokemonDetails = (props) => {
    return (
        <Card>
            <Card.Header>PokeMon Details</Card.Header>
            <Card.Body>
                <Card.Title>Abilities</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default PokemonDetails