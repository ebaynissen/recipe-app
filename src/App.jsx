import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container className=''>
      <Navigation />
      <h1 className=''>recipe time</h1>
    </Container>
  )
}

export default App
