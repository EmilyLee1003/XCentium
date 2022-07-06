import react from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import './login.css'

function Login(){


let navigate = useNavigate(); 
const toRegisterPage = () =>{ 
      let path = `/register`; 
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
    Login
  </Button>
  </div>
  <Button variant="primary" type="submit" onClick={toRegisterPage}>
    New member? Click here to register!
  </Button>
  </div>
</div>
    </div>
)
}

export default Login;