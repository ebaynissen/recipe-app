import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import {Recipe} from './classes/Recipe';
import {useState} from 'react';

function App() {
  const [recipes, setRecipes] = useState([new Recipe(
    "Carbonara", 
    ["Pasta", "Eggs", "Bacon", "Cheese"], 
    "30", 
    "Very good carbonara", 
    ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"]
  ), 
  new Recipe(
    "Carbonara2", 
    ["Pasta2", "Eggs", "Bacon2", "Cheese"], 
    "30", 
    "Very good carbonara2", 
    ["Cook Pasta", "Fry bacon", "Mix Sauce2", "Assemble", "Profit"]
  )]); 
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  return (
    <Container fluid className='min-vh-100 vh-100 m-0 p-0'>
      <Row> 
        <Col><DisplayCard content={<Navigation recipes={recipes} searched={setSelectedRecipe}/>}/></Col>
      </Row>
      <Row> 
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: Popular Recipes*/}
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: Saved Recipes*/}
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: smth here mby*/}
      </Row>
      <Row> 
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: smth else here mby*/}
        <Col xs={9}>                                                {/*Displays Selected Recipe*/}
          <DisplayCard content={<RecipeDisplay Recipe={selectedRecipe}/>}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;