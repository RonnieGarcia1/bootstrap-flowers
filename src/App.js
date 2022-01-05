import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

const App = () => {
  return (
    <div>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://toppng.com/uploads/preview/flower-png-and-lotus-image-flower-pixel-11563162668zr3aovq6k6.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      React Bootstrap - Flowers
      </Navbar.Brand>
            <Breadcrumb>
        <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#Library">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#Data">Data</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  </Navbar>
      <div className="card-groups">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flower_July_2011-2_1_cropped.jpg/1200px-Flower_July_2011-2_1_cropped.jpg" />
          <Card.Body>
            <Card.Title>Yellow</Card.Title>
            <Card.Text>
              Sunflowers
            </Card.Text>
            <Card.Text>
            The sunflower (Helianthus annuus) is an annual plant with a large daisy-like flower face. Its scientific name comes from the Greek words helios (“sun”)
            </Card.Text>
            <Button variant="primary">Gift it</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg" />
          <Card.Body>
            <Card.Title>Lavender</Card.Title>
            <Card.Text>
              Cosmos smell amazing
            </Card.Text>
            <Card.Text>
            Cosmos plants (Cosmos bipinnatus) are an essential for many summer gardens, reaching varying heights in many colors, adding frilly texture to the flower bed. Growing cosmos is simple and cosmos flower care is easy as well as rewarding when single or double blooms appear on stems reaching 1 to 4 feet (0.5-1 m.).
            </Card.Text>
            <Button variant="primary">Gift it</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg" />
          <Card.Body>
            <Card.Title>Apricot</Card.Title>
            <Card.Text>
            Tulips are great for spring!
            </Card.Text>
            <Card.Text>
            Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes (having bulbs as storage organs). The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white (usually in warm colors).
            </Card.Text>
            <Button variant="primary">Gift it</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
</CardGroup>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div> 
    </div>
  );
}

export default App;
