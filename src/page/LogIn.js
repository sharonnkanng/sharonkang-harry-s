import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

 const LogIn = ({setIsLogin}) => {
 const navigate = useNavigate();

  const loginUser = (event) => { 
    // prevent page to refresh
    event.preventDefault();
    setIsLogin(true);
    // console.log("login")
    navigate('/');
   };
  

  return (
    <Container> 
    <Form onSubmit={(event) => loginUser(event)}>
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
     {/* if type if submit, then it will refresh the page */}
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
    </Container>
  )
}

export default LogIn
