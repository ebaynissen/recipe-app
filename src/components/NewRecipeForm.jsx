import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Recipe } from '../classes/Recipe';

export default function RecipeDisplay() {
const [ingredients, setIngredients] = useState([]);
const [name, setName] = useState(""); 
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
            <Form>
            {/*TODO: Slider for unit*/}
            {/*TODO: Input fields for all the different states. (required for some)*/}
            {/*TODO: Submit button to create Recipe object -> submitHandler*/}


            </Form>
        </Container>
    )
}

function submitHandler(){
  
}