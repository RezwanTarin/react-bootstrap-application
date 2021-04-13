import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com"></Form.Control>
                  <Form.Text  className="text-muted">
                    We'll never share your email Address, trust Us!
                  </Form.Text>
                </Form.Group>
          </Col>

            <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  placeholder="password"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Log In</Button>
        </Form>
        <Card className="mb-3" style={{color:"#000"}}>
          <Card.Img src="https://picsum.photos/200/50" />
          <Card.Title>
            Card Example
          </Card.Title>
          <Card.Text>
            This is an example of react bootstrap
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert>This is button</Alert>
        <Button variant="primary">Test Button</Button> 
        </Container>
      </header>
    </div>
  );
}

export default App;
