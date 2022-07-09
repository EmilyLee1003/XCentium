import { useState, createContext, useContext } from 'react';
import {validUsers, error} from '../../data'; 
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null)

export const useAuth =()=>{
  return useContext(AuthContext)
}
export const AuthProvider = ({children})=>{

    const [formDetails, setFormDetails]= useState({userName:"", password:""})
    const [registerDetails, setRegisterDetails]= useState({name: "",userName:"", password:""})
    const [isAuth, setIsAuth] = useState(false);
    const [errorMessage, setErrorMessage] =useState("")
    
    let navigate = useNavigate(); 
    const login =(formDetails)=>{
      
        setFormDetails(formDetails)

        const userData = validUsers.find((user) => user.userName === formDetails.userName);
        if (userData) {
          // parseInt to turn password string into an integer. Datatype has to be the same as validUsers data object
          if (userData.password !== parseInt(formDetails.password)) {
            // Invalid password
          setErrorMessage({errorMessage: error.password})
          } else {
            setIsAuth(true);
            //redirect to home page if login is sucessful 
            navigate(`/home`); 
            console.log("valid usernamee and password combo")
          }
        } else {
          // Username not found
          setErrorMessage({errorMessage: error.userName });
      
        }
    }

    const register =(registerDetails)=>{
      
      setRegisterDetails(registerDetails)
      //regex
  let alphabet = /^[A-Za-z]+$/;
  let alphaNumeric= /^[a-zA-Z0-9]+$/
  let specialChar= /^[ A-Za-z0-9_@./#&+-]*$/


if(registerDetails){
// name contains only alphabet and has at least 10 characters
    if(registerDetails.name.match(alphabet)&& registerDetails.name.length<=10 && registerDetails.name.length>0){
    setErrorMessage("")
    setRegisterDetails(registerDetails.name)
 
    } else 
    setErrorMessage(error.invalidName);

// userName contains alphabet and/or numbers and has least 10 characters
    if(registerDetails.userName.match(alphaNumeric)&& registerDetails.userName.length<=10 && registerDetails.userName.length>0){
    setErrorMessage("")
    setRegisterDetails(registerDetails.userName)
    } else 
    setErrorMessage(error.invalidUserName);

// password contains alphanumeric and/or special characters and has to have 8 or more characters

    if(registerDetails.password.match(specialChar)&& registerDetails.password.length>=8 && registerDetails.password.length>0 ){
      setErrorMessage("")
      setRegisterDetails(registerDetails.password)
    // setFormDetails(...formDetails)
    } else 
    setErrorMessage(error.invalidPassword); 

    console.log("REGISTER DETAILS", registerDetails)
  };

  validUsers.push(registerDetails)
  
};


    const logout=()=>{
        setFormDetails(null)
    }

return <AuthContext.Provider value ={{isAuth, login,logout,register}}> {children}</AuthContext.Provider>
}
