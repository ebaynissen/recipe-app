import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeList from './components/RecipeList';
import { cookbook } from './classes/CookBook';
import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState(cookbook); 
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  function addToCatalogue(newRecipe){
    setRecipes([newRecipe, ...recipes])
  }

  function CardSelection(){

    if (window.location.href == "http://localhost:4000/NewRecipe"){
      return(
        <div>
        <Row>  
        <Col>               
        <DisplayCard content={<NewRecipeForm addToCatalogue={addToCatalogue} />}/> 
        </Col>
        <Col xs={3}><DisplayCard content={"Unit Calculator"}/></Col>   
      </Row>
      </div>
        
      )
    }
    else{
    return(
      <div>
      <Row> 
        <Col xs={8}>
          <DisplayCard content={<RecipeList recipes={recipes} setView={setSelectedRecipe}/>}/>
        </Col>
        <Col><DisplayCard content={"Saved Recipes"}/></Col>
        <Col><DisplayCard content={"Unit Calculator"}/></Col>
       </Row>
        <Row>  
        <Col>               
          <DisplayCard content={<RecipeDisplay Recipe={selectedRecipe}/>}/>
        </Col>   
      </Row>
      </div>
      
    )}
  }

  return (
    <Container fluid className='verycoolbackground min-vh-100 m-0 p-0'>
      <Row> 
        <Col><DisplayCard content={<Navigation recipes={recipes} searched={setSelectedRecipe}/>}/></Col>
      </Row>
        <CardSelection/>
      
    </Container>
  )
}

export default App;