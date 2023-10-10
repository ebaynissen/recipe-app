import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Recipe } from '../classes/Recipe';

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
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
      onChange={() => setUnit(!unit)} checked= {unit}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to US units</label>
    </div>
  </Container>

)

 
}

function submitHandler(){

}