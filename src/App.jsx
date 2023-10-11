import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeList from './components/RecipeList';
import {Recipe} from './classes/Recipe';
import {useState} from 'react';

function App() {
  const [recipes, setRecipes] = useState([
    new Recipe(
      "Carbonara",  "unknown",
      {"Pasta" : {amount:400, unit:"gram"}, "Eggs": { amount:2, unit:"pieces"}, "Bacon" : {amount:100, unit:"gram"}, "Cheese" : {amount:100 , unit:"gram"}}, 
      "30", 
      "Very good carbonara", 
      ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"], false, 2
    ), 
    new Recipe(
      "Carbonara2", "unknown",
      {"Pasta" : {amount:500, unit:"gram"}, "Eggs": { amount:4, unit:"pieces"}, "Bacon" : {amount:200, unit:"gram"}, "Cheese" : {amount:200 , unit:"gram"}}, 
      "30", 
      "Very good carbonara2", 
      ["Cook Pasta", "Fry bacon", "Mix Sauce2", "Assemble", "Profit"], false, 4
    )
  ]); 
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  
  function addToCatalogue(newRecipe){
    setRecipes([newRecipe, ...recipes])
  }
  return (
    <Container fluid className='min-vh-100 vh-100 m-0 p-0'>
      <Row> 
        <Col><DisplayCard content={<Navigation recipes={recipes} searched={setSelectedRecipe}/>}/></Col>
      </Row>
      <Row> 
      <Col xs={8}>
          <DisplayCard content={<RecipeList recipes={recipes} setView={setSelectedRecipe}/>}/>
        </Col>
        <Col><DisplayCard content={"Saved Recipes"}/></Col>
        <Col><DisplayCard content={"Unit Calculator"}/></Col>
      </Row>
      <Row>                    
        <Col xs={8}>
          <DisplayCard content={<RecipeDisplay Recipe={selectedRecipe}/>}/>
        </Col>
        <Col>
          <DisplayCard content={<NewRecipeForm addToCatalogue={addToCatalogue} />}/>
          </Col>
      </Row>
    </Container>
  )
}

export default App;