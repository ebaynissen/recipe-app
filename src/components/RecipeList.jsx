import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function RecipeList({recipes, setView}) {
    

    return (
    <Container>
        <h4> Recipes to choose from: </h4>

        {recipes.map((rec) => 
        <li key={rec.id}>
            <button key={"Button"+rec} onClick={() => setView(rec)}>
                <b>{rec.name}</b> <i>by {rec.author}</i>
            </button>
        </li>)}


           
    </Container>
    )
}