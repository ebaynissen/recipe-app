import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Recipe } from "../classes/Recipe";

export default function NewRecipeForm() {
    const [ingredients, setIngredients] = useState([""]);
    const [name, setName] = useState("");
    const [unit, setUnit] = useState(false);
    /*TODO: States for recipe parameters*/
    /*TODO: state to select input unit Type*/

    /* ingredients: Can we make a button to add fields? 
Start with some amount of boxes to enter ingredients 
for each ingredient:
- textbox for name, 
- textbox for amount
- select from options for unit (grams, ml, pieces, tbs, tsp...))

Button to add more fields if needed. 
*/
    return (
        <Container>
            <b> Create new recipe! </b>
            {/*TODO: Create FORM object*/}
            {/*TODO: Input fields for all the different states. (required for some)*/}
            {/*TODO: Submit button to create Recipe object -> submitHandler*/}
            
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => setUnit(!unit)}
                    checked={unit}
                />
                <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                >
                    Switch to US units
                </label>
            </div>
	
            <Form>
                <Form.Group controlId="form.name">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter recipe name" />
                </Form.Group>
                <Form.Group controlId="form.author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter recipe author"
                    />
                </Form.Group>
				<Form.Group controlId="form.portions">
                    <Form.Label>Portions</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter portions"
                    />
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
                            <Button className="btn btn-success" onClick={e => addHandler(ingredients, setIngredients)}>Add</Button>
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
                <Form.Group controlId="form.time">
                    <Form.Label>Time (mins)</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter recipe time"
                    />
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
                        as="textarea"
                        rows={3}
                        placeholder="Descripe in steps how to make the recipe"
                    />
                </Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
            </Form>
        </Container>
    );
}

function submitHandler() {
    const newRec = new Recipe();
}
function addHandler(ingredients, setIngredients){
    setIngredients(ingredients);

}
