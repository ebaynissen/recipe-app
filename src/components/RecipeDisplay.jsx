import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function RecipeDisplay({Recipe}) {
    const [unit, setUnit] = useState(Recipe.unit); // boolean state based on switch for which unit shown.
    const ingredient_list = Object.keys(Recipe.ingredients);
    const [portions, setPortions] = useState(Recipe.portions);
    const [dispIng, setDispIng] = useState(Recipe.getIngredients(portions));

    function changeAmounts(e){
        let newPortions = e.target.value;
        setPortions(newPortions);
        setDispIng(Recipe.getIngredients(newPortions));
    }

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
                <Form>
                    <div className='form-group '>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                    onChange={e => unitChange(e, unit, setUnit, dispIng, setDispIng)} checked= {unit}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to US units</label>
                    <select className="form-control" id="portionSelect" onChange={changeAmounts} value={portions}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <Form.Label>Portions</Form.Label>
                    </div>      
                </Form>

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
                        
                        {ingredient_list.map((ing) => 
                        <li key={ing}>{`${ing} - ${dispIng[ing].amount} ${dispIng[ing].unit}`}</li>)}
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