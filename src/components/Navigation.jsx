import { Container, Nav, Navbar, Form, Button} from 'react-bootstrap'

export default function Navigation({recipes, searched}) {
    function handleSearch() {
        let search = document.getElementById("search").value;
        if(recipes.map(recipe => recipe.name).includes(search)) {
          searched(recipes.filter(recipe => recipe.name === search)[0]);
        }
    }

    return (
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Recipes!</Navbar.Brand>
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