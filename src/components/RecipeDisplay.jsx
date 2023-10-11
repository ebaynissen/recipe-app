import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function RecipeDisplay({Recipe}) {

    {/*TODO: When Recipe changes (selectedRecipe), the states dont reset! This needs to happen! The Entire RecipeDisplay needs to reset.. */}

    const [unitUS, setUnitUS] = useState(Recipe.unitUS); // boolean state based on switch for which unit shown.
    const ingredient_list = Object.keys(Recipe.ingredients);
    const [portions, setPortions] = useState(Recipe.portions);
    const [dispIng, setDispIng] = useState(Recipe.getIngredients(portions));

    function changeAmounts(e){
        let newPortions = e.target.value;
        setPortions(newPortions);
        setDispIng(Recipe.getIngredients(newPortions, unitUS));
    }
    function changeUnitUS(e){
        let newUnitUS = !unitUS
        setUnitUS(newUnitUS);
        setDispIng(Recipe.getIngredients(portions, newUnitUS))


    }

    return (
    <Container>
        <Row>
            <Col>
                <h1>{Recipe.name}</h1>
            </Col>
            <Col> {/* Empty column for spacing*/}    </Col>
            <Col>
                <div className="form-check form-switch">
                <Form>
                    <div className='form-group '>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                    onChange={changeUnitUS} checked= {unitUS}/>
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
                <small>By: <i>{Recipe.author}</i> <div className="vr mx-2"></div>Time: {Recipe.time} Minutes <div className="vr mx-2"></div> Portions: {Recipe.portions}</small>
                <p>{Recipe.description}</p>
                <hr/>
            </Col>
        </Row>
        <Row>       
            <Col>
                <h3>Ingredients</h3>
                <ul>   
                {/*TODO: Ingredients dont update correctly!!! When changing selectedRecipe, the dispIng state doesnt reset? */}
                    {ingredient_list.map((ing) => 
                    <li key={ing}>{`${ing} - ${dispIng[ing].amount} ${dispIng[ing].unitUS}`}</li>)}
                    </ul>
            </Col>
            <Col>
                <h3>Instructions </h3>
                <ol>
                    {Recipe.steps}
                    {/*Recipe.steps.map((step) => <li key={step}>{step}</li>)*/}
                </ol>
             </Col>
                
        </Row>
    </Container>
    )
}