import { Container } from 'react-bootstrap';

export default function RecipeList({recipes, setView}) {
    return (
    <Container>
        <h4> Recipes to choose from: </h4>

        {recipes.map((rec) => 
        <li className='p-1' key={rec.id}>
            <button type='button' className="btn btn-info" key={"Button"+rec} onClick={() => setView(rec)}>
                <b>{rec.name}</b> <i>by {rec.author}</i>
            </button>
        </li>)}
    </Container>
    )
}