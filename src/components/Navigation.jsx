import { Container, Nav, Navbar, Form, Button} from 'react-bootstrap'

export default function Navigation({recipes, searched}) {
    function handleSearch() {
        let search = document.getElementById("search").value;
        let res = recipes.filter(recipe => 
          recipe.name.toLowerCase() === search.trim().toLowerCase() ||
          recipe.tags[search.trim().toLowerCase()] ||
          recipe.tags[toCapitalize(search.trim())] ||
          recipe.ingredients[search.trim().toLowerCase()] ||
          recipe.ingredients[toCapitalize(search.trim())]
        ) ?? []

        if (res.length === 1) searched(res[0]);
        else if(res.length > 1) alert("Multiple recipes found, please be more specific");
    }
    /*TODO: Change that search shows list of relevant recipes to choose from. Re-render card with recipe list. Use RecipeList class */

    
    return (
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">🥗 Recipes!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="popular">Popular</Nav.Link>
            <Nav.Link href="#" disabled>Saved</Nav.Link>
            <Button variant='outline-success' onClick={handleNew}> + Create New Recipe</Button>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search"
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

function handleNew(){
  window.location.href = ("http://localhost:4000/NewRecipe");
}

export const toCapitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};