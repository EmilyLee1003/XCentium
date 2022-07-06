import react from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import './register.css'
function Register(){


  
let navigate = useNavigate(); 
const toLoginPage = () =>{ 
      let path = `/login`; 
      navigate(path);
    }

return(
    <div>
    <div className="form">
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> Username</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form>
  <div className="buttons"> 
  <div className="firstButton"> 
  <Button variant="primary" type="submit">
        register
  </Button>
  </div>
  <Button variant="primary" type="submit" onClick={toLoginPage}>
    Already a member? Click here to login!
  </Button>
  </div>
  </div>
      </div>
)
}

export default Register;