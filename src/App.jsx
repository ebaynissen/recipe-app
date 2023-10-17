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
  const [recipes, setRecipes] = useState( () => {
  if(localStorage.length == 0){
    cookbook.forEach((rec) => {localStorage.setItem("Cookbook", JSON.stringify(rec))});
    return cookbook}
  else{
    
    const book = JSON.parse(localStorage.getItem("Cookbook"));
    return book;
    }
  }); 
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  function addToCatalogue(newRecipe){
    let temp = [newRecipe, ...recipes];
    setRecipes(temp)
    localStorage.setItem("Cookbook", JSON.stringify(temp));
  }

  function removeFromCatalogue(recipe){
    let temp = (recipes).filter((a) => a.id !== recipe.id);
    setRecipes(temp)
    localStorage.setItem("Cookbook", JSON.stringify(temp));
    setSelectedRecipe(recipes[0])
  }

  function ShowManyRecipes(){
    const show = recipes.map((rec) => 
      <Row key={rec}>
      <DisplayCard content={<RecipeDisplay Recipe={rec} removeFromCatalogue={removeFromCatalogue}/> } />
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
        <Col xs={3}><DisplayCard content={"Unit Calculator"}/></Col>
       </Row>
        <Row>  
        <Col>               
          <DisplayCard content={<RecipeDisplay Recipe={selectedRecipe} removeFromCatalogue={removeFromCatalogue}/>}/>
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