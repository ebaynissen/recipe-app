import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Recipe } from '../classes/Recipe';

export default function RecipeDisplay({Recipe}) {
const [unit, setUnit] = useState(Recipe.unit); // boolean state based on switch for which unit shown.
const ingredient_list = Object.keys(Recipe.ingredients);
const [dispIng, setDispIng] = useState(Recipe.ingredients); // This can change when units are changed?
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{Recipe.name}</h1>
                </Col>
                <Col>  
                    
                </Col>
                <Col>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                onChange={e => unitChange(e, unit, setUnit, dispIng, setDispIng)} checked= {unit}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to US units</label>
            </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <small>By: <i>{Recipe.author}</i> Approx time: {Recipe.time} Minutes</small>
                    <p>{Recipe.description}</p>
                    <hr/>
                </Col>
            </Row>
            <Row>       
                <Col>
                    <h3>Ingredients</h3>
                    <ul>
                        
                        {ingredient_list.map((ingredient) => 
                        <li key={ingredient}>
                            {ingredient} - {(Object.entries(dispIng[ingredient])[0]).join(" ") }</li>)}
                    </ul>
                </Col>
                <Col>
                    <h3>Instructions </h3>
                    <ol>
                        {Recipe.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                </Col>
                
            </Row>
        </Container>
    )
}

function unitChange(e, unit, setUnit, dispIng, setDispIng) {

setUnit(!unit);
/*TODO: implement unit conversion with api. */
/*const converted_values = Object.keys(dispIng).map((name) => {
    return {name : convertIngredient(dispIng[name], unit)}
});

setDispIng(converted_values)*/
}

function convertIngredient(item, unit){

    return item
}