import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeList from './components/RecipeList';
import OpenFoodFacts from './api/openfoodfacts';
import { cookbook } from './classes/CookBook';
import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState(cookbook); 
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  function addToCatalogue(newRecipe){
    setRecipes([newRecipe, ...recipes])
  }

  function ShowManyRecipes(){
    const show = recipes.map((rec) => 
      <Row key={rec}>
      <DisplayCard content={<RecipeDisplay Recipe={rec}/> } />
      </Row>
    
    );

    return(
      <div>
      {show}
      </div>
    )

    
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
    if (window.location.href == "http://localhost:4000/popular"){
      return(
        <div>
        <Row>  
        <Col>               
        <DisplayCard content={<ShowManyRecipes/>}/>
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
        <Col xs={7}>
          <DisplayCard content={<RecipeList recipes={recipes} setView={setSelectedRecipe}/>}/>
        </Col>
        <Col><DisplayCard content={"Saved Recipes"}/></Col>
        <Col xs={3}><DisplayCard content={<OpenFoodFacts />}/></Col>
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