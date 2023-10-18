import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navigation from './components/Navigation';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import RecipePreview from './components/RecipePreview';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeList from './components/RecipeList';
import OpenFoodFacts from './api/OpenFoodFacts';
import { cookbook } from './classes/CookBook';
import { useState } from 'react';
import { Recipe } from './classes/Recipe';
import { Last } from 'react-bootstrap/esm/PageItem';

function App() {

  const [page, setPage] = useState("")
  const [recipes, setRecipes] = useState( () => {
  if(localStorage.length == 0){

    localStorage.setItem("Cookbook", JSON.stringify(cookbook));
    return cookbook
  }else{
    
    const book = Recipe.parse(localStorage.getItem("Cookbook"));
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
    if (temp.length > 1){
    setSelectedRecipe(recipes[1])}
    else if(temp.length == 1){
      setSelectedRecipe(recipes[0])
    }
    else{
      setSelectedRecipe(new Recipe("NO RECIPES FOUND"));
    }
  }

  function ShowManyFullRecipes(){
    const show = recipes.map((rec) => 
      <Row key={rec}>
      <DisplayCard content={<RecipeDisplay Recipe={rec} removeFromCatalogue={removeFromCatalogue}/> } />
      </Row>
    );
    return(
      <div>
      {show}
      </div> )
  }

  function Preview(){
    const show = recipes.map((rec) => 
    <div>
      <Row key={rec}>
      <RecipePreview Recipe={rec} setSelectedRecipe={setSelectedRecipe}/>       
      </Row>
      <Row> 
      <p> </p></Row>
      </div>
    );
    return (
      <div>
      <h2> Popular Recipes </h2>
      <p> Click a recipe to open it! </p>
      {show}
      </div>
    )
  }

  function CardSelection(){

    if (page == "newRecipe"){
      return(
        <div>
        <Row>  
        <Col>               
        <DisplayCard content={<NewRecipeForm addToCatalogue={addToCatalogue} />}/> 
        </Col> 
      </Row>
      </div>
        
      )
    }
    if (page == "popular"){
      return(
        <div>
        <Row>  
        <Col>               
        <DisplayCard content={<ShowManyFullRecipes/>}/>
        </Col>
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
          {/*
        <Col><DisplayCard content={"Saved Recipes"}/></Col>
        */}
        <Col xs={5}><DisplayCard content={<OpenFoodFacts />}/></Col>
       </Row>
        <Row>  
        <Col xs={9}>               
          <DisplayCard content={<RecipeDisplay Recipe={selectedRecipe} removeFromCatalogue={removeFromCatalogue}/>}/>
        </Col>   
        <Col xs={3}><DisplayCard content={<Preview />}/></Col>
      </Row>
      </div>
      
    )}
  }

  return (
    <Container fluid className='verycoolbackground min-vh-100 m-0 p-0'>
      <Row> 
        <Col><DisplayCard content={<Navigation recipes={recipes} searched={setSelectedRecipe} setPage={setPage}/>}/></Col>
      </Row>
        <CardSelection/>
      <Row>
      <DisplayCard content={
        <Button className="mr-0" variant="danger" 
        onClick={() => {
          localStorage.clear();
          setRecipes(cookbook);
          localStorage.setItem("Cookbook", JSON.stringify(cookbook));
          setSelectedRecipe(cookbook[0]);}
          }
          > Reset Recipes </Button>
      }/>
      </Row>
    </Container>
  )
}

export default App;