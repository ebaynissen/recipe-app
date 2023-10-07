import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './components/DisplayCard';
import RecipeDisplay from './components/RecipeDisplay';
import {Recipe} from './classes/Recipe';

function App() {
  return (
    <Container fluid className='min-vh-100 vh-100 m-0 p-0'>
      <Row> 
        <Col><DisplayCard content={<Navigation />}/></Col>
      </Row>
      <Row> 
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: Popular Recipes*/}
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: Saved Recipes*/}
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: smth here mby*/}
      </Row>
      <Row> 
        <Col><DisplayCard content={"hello"}/></Col>                 {/*TODO: smth else here mby*/}
        <Col xs={9}>                                                {/*Displays Selected Recipe*/}
          <DisplayCard content={<RecipeDisplay Recipe={
            new Recipe(
              "Carbonara", 
              ["Pasta", "Eggs", "Bacon", "Cheese"], 
              "30", 
              "Very good carbonara", 
              ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"]
            )
          }/>}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;