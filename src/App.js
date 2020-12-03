import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 >Congrats! You won PS5</h1>
        <p className='mb-4'>Please enter your sensitive data to claim your reward!</p>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Your Name'></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label controlId='formEmail'> Email address</Form.Label>
            <Form.Control type='email' placeholder='example@email.com'></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Credit Card</Form.Label>
            <Form.Control type='number' placeholder='123-456-789-000'></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label controlId='formPassword'> Credit Card Password</Form.Label>
            <Form.Control type='password' placeholder='password'></Form.Control>
            <Form.Text>We'll never share your information, "wink, wink"</Form.Text>
          </Form.Group>
          <Button variant='danger' type='submit'>Claim Your PS5</Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
