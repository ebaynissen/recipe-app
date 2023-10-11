import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Recipe } from "../classes/Recipe";
import App from "../App";


export default function NewRecipeForm({addToCatalogue}) {
    
    const [ingredients, setIngredients] = useState([""]);
    const [unitUS, setUnitUS] = useState(false);
    const [validated, setValidated] = useState(false);

    return (
        <Container>
            <b> Create new recipe! </b>
            {/*TODO: Submit button to create Recipe object -> submitHandler*/}
            
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
	
            <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, addToCatalogue, ingredients, unitUS, setIngredients, setUnitUS, setValidated)}>
                <Form.Group controlId="form.name">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter recipe name" />
                    <Form.Control.Feedback type="invalid"> Please enter a Recipe name! </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="form.author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Enter recipe author"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter an Author! </Form.Control.Feedback>
                </Form.Group>
				<Form.Group controlId="form.portions">
                    <Form.Label>Portions</Form.Label>
                    <Form.Control 
                      required 
                      type="number" 
                      placeholder="Enter portions" 
                    />
                    <Form.Control.Feedback type="invalid"> Please enter the amount of portions! </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="form.ingredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Ingredient"
                            />
                        </Col>
                        <Col>
                            <Form.Control type="number" placeholder="Amount" />
                        </Col>
                        <Col>
                            <Form.Select aria-label="Unit">
                                <option value={"pieces"}>pieces</option>
                                <option value={"g"}>g</option>
                                <option value={"ml"}>ml</option>
                                <option value={"tbs"}>tbs</option>
                                <option value={"tsp"}>tsp</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Button className="btn btn-success" onClick={(e) => addHandler(e, ingredients, setIngredients)}>Add</Button>
                        </Col>
                    </Row>
                    <div>
                        Added ingredients:
                        <ul>
                            {ingredients.map((ing) => (
                                <li key={ing}>{ing}</li>
                            ))}
                        </ul>
                    </div>
                </Form.Group>
                <Form.Group controlId="form.time" >
                    <Form.Label>Time (mins)</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter recipe time"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter the time required to make this recipe! </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="form.description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter a short recipe description"
                    />
                </Form.Group>
                <Form.Group controlId="form.steps">
                    <Form.Label>Steps</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder="Descripe in steps how to make the recipe"
                    />
                    <Form.Control.Feedback type="invalid"> Please enter Recipe instructions! </Form.Control.Feedback>
                </Form.Group>
				<Button variant="primary" type="submit">
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

  if (form.checkValidity() === false) {
  }
  else{
 
  const newRec = new Recipe(form[0].value, //time
    form[1].value, //author
  ingredients, 
  form[7].value, //time
  form[8].value, //description
  form[9].value,  //steps
  unitUS,
  form[2].value //portions
  );

  addToCatalogue(newRec)

  /* Reset States */
    setIngredients([""]);
    setUnitUS(false);
    setValidated(false);



  e.target.classList.remove("was-validated");
  }
}


function addHandler(e, ingredients, setIngredients){
  const form = e.currentTarget;
  const ing = form[3];
  var temp = ingredients;
  temp[ing] = {"amount":form[4], "unit":form[5]};
  setIngredients(temp);
}
