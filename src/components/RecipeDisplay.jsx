import { Container, Row, Col } from 'react-bootstrap';

export default function RecipeDisplay({Recipe}) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{Recipe.name}</h1>
                </Col>
                <Col>  
                    <h2>{Recipe.time} Minutes</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{Recipe.description}</p>
                </Col>
            </Row>
            <Row>       
                <Col>
                    <h2>Instructions</h2>
                    <ol>
                        {Recipe.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                </Col>
                <Col>
                    <h2>Ingredients</h2>
                    <ul>
                        {Recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}