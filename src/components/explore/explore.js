import 'bootstrap/dist/css/bootstrap.min.css';
import './explore.css'
import { Card, Container } from 'react-bootstrap';
import dummyDp from '../../assets/dummy-dp.png';

function Explore() {
  return (
    <>
    <section className="explore">
        <Container>
      <Card style={{ width: '18rem' }}>
  <Card.Img src={dummyDp} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button variant="primary">Go somewhere</button>
  </Card.Body>
</Card>
  </Container>
</section>
    </>
  )
}
export default Explore;