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

    return (
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">🥗 Recipes!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Popular</Nav.Link>
            <Nav.Link href="#" disabled>Saved</Nav.Link>
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

export const toCapitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};