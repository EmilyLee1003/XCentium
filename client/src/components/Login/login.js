import react, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import './login.css'
import {validUsers, error} from '../../data'; 
import { useAuth } from '../Auth/Auth'; 



export default function Login(){
  

const [formField, setFormField]= useState({userName:"", password:""})
// const [errorMessage, setErrorMessage] =useState("")
const auth = useAuth()
console.log("FORM FIELD", formField)


// this function changes the url to the appropriate page 
let navigate = useNavigate(); 

const toRegisterPage = () =>{ 
      let path = `/register`; 
      navigate(path);
    }

//handles when the login for is submitted 
const handleLogin = (e)=>{
  //prevents the page from reloading
  e.preventDefault();

  auth.login(formField)

  
};

return(
<div>
  <div className="form">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange ={e=>{setFormField({...formField,userName: e.target.value})}} value ={formField.userName}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange ={e=>{setFormField({...formField,password: e.target.value})}} value={formField.password} />
  </Form.Group>
</Form>

<div className="buttons"> 
  <div className="firstButton"> 
  <Button variant="primary" type="submit" onClick={handleLogin}>
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
};
