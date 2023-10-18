import { Row, Col, Form, Card, Button, FormLabel} from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

export default function RecipeDisplay({Recipe, removeFromCatalogue}) {

    useEffect(() => {
        // Update the relevant states when new recipe selected
        //setUnitUS(Recipe.unitUS);
        setIngredientList(Object.keys(Recipe.ingredients));
        setPortions(Recipe.portions);
        setDispIng(Recipe.ingredients);
        setImage(Recipe.image);
      }, [Recipe]);

    const [unitUS, setUnitUS] = useState(false); // boolean state based on switch for which unit shown.
    const [ingredient_list, setIngredientList] = useState(Object.keys(Recipe.ingredients));
    const [portions, setPortions] = useState(Recipe.portions);
    const [dispIng, setDispIng] = useState(Recipe.ingredients);
    const [image, setImage] = useState(localStorage.getItem(Recipe.image))

    function changeAmounts(e){
        let newPortions = e.target.value;
        setPortions(newPortions);
        setDispIng(Recipe.getIngredients(newPortions, unitUS));
    }
    {/* 
    function changeUnitUS(e){
        let newUnitUS = !unitUS
        setUnitUS(newUnitUS);
        setDispIng(Recipe.getIngredients(portions, newUnitUS))
    }
*/}
    const reader = new FileReader();
    return (

    <Card className='bg-light'>
        <Card.Body>
        <Row>
            <Col>
                <Card.Img style={{ width: '18rem' }} variant="top" 
                src={image}
                alt="not found"
                width={"400px"}/>
            </Col>
        
            <Col>
                <Row>
                    <Card.Title><h1>{Recipe.name}</h1></Card.Title>
                </Row>
                <Row>
                    <small>By: <i>{Recipe.author}</i> <div className="vr mx-2"></div>Time: {Recipe.time} Minutes <div className="vr mx-2"></div> Portions: {Recipe.portions}</small>
                    <p>{Recipe.description}</p>
                    <hr/>
                 </Row>
            </Col>
            <Col> {/* Spacing */}</Col>

            <Col>
                <div className="form-check form-switch">
                <Form>
                <div className='form-group '>
                                    {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeUnitUS} checked= {unitUS}/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to US units</label>
    */}
                     <h5>Change Portions: </h5>               
                    <Form.Control type="number"id="portionSelect" min={1} onChange={changeAmounts}value={portions}/>              
                    <Form.Label>Portions</Form.Label>
                </div>      
                </Form>
                </div>
            </Col>
        </Row>
        <hr/>

        <Row>       
            <Col>
                <h3>Ingredients</h3>
                <ul>   
                    {ingredient_list.map((ing) => <li key={ing}>{`${ing} - ${dispIng[ing].amount} ${dispIng[ing].unit}`}</li>)}
                </ul>
            </Col>
            <Col>
                <h3>Instructions </h3>
                <ol>
                    {Recipe.steps.map((step) => <li key={step}>{step}</li>) ?? "No instructions"}
                </ol>
             </Col>                
        </Row>
        <Row>
        <b><small>Tags: </small></b>
                <ol>
                    {Object.keys(Recipe.tags).filter((tag) => Recipe.tags[tag]).map((tag) => <small key={tag}>{tag}, </small>) ?? "No tags"}
                </ol>
        </Row>
        <Row>
        <Col>
        <Button variant="outline-secondary" onClick={editHandler()}>
                    Edit
        </Button>
        </Col>
        <Col>
        <Button variant="outline-secondary" 
        onClick={() => removeFromCatalogue(Recipe)}>
                    Delete Recipe
        </Button>
        </Col>
        </Row>
        </Card.Body>
    </Card>
    )
}
function editHandler(){
    //implement
}