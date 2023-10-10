import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import {Recipe} from './classes/Recipe';
import {useState} from 'react';

function App() {
  const [recipes, setRecipes] = useState([new Recipe(
    "Carbonara",  "unknown",
    {"Pasta" : {400 : "gram"}, "Eggs": { 2: "pieces"}, "Bacon" : {100: "gram"}, "Cheese" : {100 : "gram"}}, 
    "30", 
    "Very good carbonara", 
    ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"]
  ), 
  new Recipe(
    "Carbonara2", "unknown",
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
        <Col><DisplayCard content={"Popular Recipes"}/></Col>                 {/*TODO: Popular Recipes*/}
        <Col><DisplayCard content={"Saved Recipes"}/></Col>                 {/*TODO: Saved Recipes*/}
        <Col><DisplayCard content={"Unit Calculator"}/></Col>                 {/*TODO: Unit Calculator*/}
      </Row>
      <Row> 
        <Col><DisplayCard content={"Create new recipe!"}/></Col>                 {/*TODO: Create new recipe!*/}
        <Col xs={9}>                                                {/*Displays Selected Recipe*/}
          <DisplayCard content={<RecipeDisplay Recipe={selectedRecipe}/>}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;