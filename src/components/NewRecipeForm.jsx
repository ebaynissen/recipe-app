import { Container, Row, Col, Form } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Recipe } from "../classes/Recipe";
import App from "../App";


export default function NewRecipeForm({addToCatalogue}) {
    
    const [ingredients, setIngredients] = useState({});
    const [unitUS, setUnitUS] = useState(false);
    const [validated, setValidated] = useState(false);
    const [tempItem, setTempItem] = useState({"Item": "Ingredient" , "Amount": 0, "Unit": "pieces"});
  /*TODO: Add a (x) button at the ingredients to remove? */

    return (
        <Container>
            <b> Create new recipe! </b>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => setUnitUS(!unitUS)}
                    checked={unitUS}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Switch to US units</label>
            </div>
	
            <Form id="form" noValidate validated={validated} onSubmit={(e) => handleSubmit(e, addToCatalogue, ingredients, unitUS, setIngredients, setUnitUS, setValidated)}>
                <Form.Group >
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter recipe name" id="form.name"/>
                    <Form.Control.Feedback type="invalid"> Please enter a Recipe name! </Form.Control.Feedback>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Enter recipe author"
                      id="form.author"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter an Author! </Form.Control.Feedback>
                </Form.Group>
				        <Form.Group >
                    <Form.Label>Portions</Form.Label>
                    <Form.Control 
                      required 
                      type="number" 
                      placeholder="Enter portions" 
                      id="form.portions"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter the amount of portions! </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    
                    <Row>
                    <small> You cannot add the same ingredient twice, it will update the first one.</small>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Ingredient"
                                id="form.ingredient"
                                onChange={(e) => {
                                  const t = tempItem;  
                                  t.Item = e.target.value;
                                  setTempItem(t);
                                  }}
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                type="number" 
                                placeholder={0} 
                                id="form.amount" 
                                min={0} 
                                onChange={(e) => {
                                  const t = tempItem;  
                                  t.Amount = e.target.value;
                                  setTempItem(t)}}
                            />
                        </Col>
                        <Col>
                            <Form.Select aria-label="Unit"
                                id="form.unit"
                                onChange={(e) => {
                                  const t = tempItem;  
                                  t.Unit = e.target.value;
                                  setTempItem(t)}}>
                                <option value={"pieces"}>pieces</option>
                                <option value={"g"}>g</option>
                                <option value={"ml"}>ml</option>
                                <option value={"tbs"}>tbs</option>
                                <option value={"tsp"}>tsp</option>                               
                            </Form.Select>
                        </Col>
                        <Col>
                            <Button className="btn btn-success" 
                            onClick={() => addHandler(ingredients, setIngredients, tempItem, setTempItem)}>
                            Add
                            </Button>
                        </Col>
                    </Row>
                    <div>
                        Added ingredients:
                        <ul>
                            {Object.keys(ingredients).map((ing) => (
                              <li key={ing}>{`${ing} - ${ingredients[ing].amount} ${ingredients[ing].unit}`} 
                              <CloseButton onClick={() => removeHandler(ingredients, setIngredients, ing)}></CloseButton></li>)
                            )}
                        </ul>
                    </div>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Time (mins)</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter recipe time"
                        min = {0}
                        id="form.time"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter the time required to make this recipe! </Form.Control.Feedback>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter a short recipe description"
                        id="form.description"
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Steps</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder="Descripe in steps how to make the recipe"
                        id="form.steps"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter Recipe instructions! </Form.Control.Feedback>
                </Form.Group>
				<Button variant="primary" type="submit" >
					Submit
				</Button>
            </Form>
        </Container>
    );
}

function handleSubmit(e, addToCatalogue, ingredients, unitUS, setIngredients, setUnitUS, setValidated){
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add("was-validated");
  const form = e.currentTarget;

  if (form.checkValidity() === false) {}
  else{

    /*Could be done using id. This might be neater.*/

  const newRec = new Recipe(form[0].value, //time
    form[1].value, //author
    ingredients, 
    form[7].value, //time
    form[8].value, //description
    form[9].value,  //steps
    unitUS, //unitType
    form[2].value //portions
    );

  addToCatalogue(newRec)
  /* Reset States and form*/
    setIngredients({});
    setUnitUS(false);
    setValidated(false);
    e.target.reset();
    e.target.classList.remove("was-validated");
  }
}

function addHandler(ingredients, setIngredients, tempItem, setTempItem){
    var temp = ingredients;
    temp[tempItem.Item] = {amount : tempItem.Amount, unit:tempItem.Unit};
    setIngredients(temp);
    setTempItem({"Item": "" , "Amount": "", "Unit": "g"});
    document.getElementById("form.ingredient").value = "";
    document.getElementById("form.amount").value = "";
    document.getElementById("form.unit").value ="g";

}

function removeHandler(ingredients, setIngredients, ing) {

const temp = Object.fromEntries(Object.entries(ingredients).filter(([key, val]) => key!==ing));
setIngredients(temp);
}


