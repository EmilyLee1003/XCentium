import react, { useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import {validUsers, error} from '../../data'; 
import { useAuth } from '../Auth/Auth' 
import './register.css'

function Register(){
  const auth = useAuth()
  const navigate = useNavigate(); 
  const [formDetails, setFormDetails]= useState({id:"", name: "", userName:"", password:0})
  const [errorMessage, setErrorMessage] =useState("")

  console.log("USERS DATA",validUsers)
console.log("FORM DETAILS",formDetails)

const toLoginPage = () =>{ 
      navigate('/login');
    }

  const handleRegister = (e)=>{
      //prevents the page from reloading
      e.preventDefault()
// run function handleValidation beforee submitting 
      auth.register(formDetails)

  }
  

// const handleFieldValidation=(e)=>{
//   //regex
//   let alphabet = /^[A-Za-z]+$/;
//   let alphaNumeric= /^[a-zA-Z0-9]+$/
//   let specialChar= /^[ A-Za-z0-9_@./#&+-]*$/

// if(e.target.id=="formBasicName"){
// // name contains only alphabet and has at least 10 characters
//   if(e.target.value.match(alphabet)&& e.target.value.length<=10 && e.target.value.length>0){
//     setErrorMessage("")
 
//   } else 
//   setErrorMessage(error.invalidName);
// } 
// // userName contains alphabet and/or numbers and has least 10 characters
// if (e.target.id == "formBasicUserName") {
//   if(e.target.value.match(alphaNumeric)&& e.target.value.length<=10 && e.target.value.length>0){
//     setErrorMessage("")
//   } else 
//   setErrorMessage(error.invalidUserName);
// } 
// // password contains alphanumeric and/or special characters and has to have 8 or more characters
// if (e.target.id == "formBasicPassword") {
//   if(e.target.value.match(specialChar)&& e.target.value.length>=8 && e.target.value.length>0 ){
//     setErrorMessage("")
//     // setFormDetails(...formDetails)
//   } else 
//   setErrorMessage(error.invalidPassword);
// } 
// }


return(
    <div>
    <div className="form">
  <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label> Name</Form.Label>
      <Form.Control type="name" placeholder="Name"  onChange ={e=>{setFormDetails({...formDetails,name: e.target.value})}} value ={formDetails.name} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicUserName">
      <Form.Label> Username</Form.Label>
      <Form.Control type="userName" placeholder="Username" onChange ={e=>{setFormDetails({...formDetails,userName: e.target.value})}} value ={formDetails.userName}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange ={e=>{setFormDetails({...formDetails,password: e.target.value})}} value ={formDetails.password}  />
    </Form.Group>
  </Form>
  <div className="buttons"> 
  <div className="firstButton"> 
  <Button variant="primary" type="submit" onClick={handleRegister}>
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