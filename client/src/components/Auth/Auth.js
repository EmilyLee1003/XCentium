import { useState, createContext, useContext } from 'react';
import {validUsers, error} from '../../data'; 
import { useNavigate } from "react-router-dom";
import { Navigate} from "react-router-dom";
const AuthContext = createContext(null)


export const AuthProvider = ({children})=>{

    const [formDetails, setFormDetails]= useState({userName:"", password:""})
    const [isAuth, setIsAuth] = useState(false);
    const [errorMessage, setErrorMessage] =useState("")

    console.log("FORM DETAILS",formDetails)
    
    let navigate = useNavigate(); 
    const login =(formDetails)=>{
        console.log("CALLED LOGIN", formDetails)
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
            let path = `/home`; 
            navigate(path); 
            console.log("valid usernamee and password combo")
          }
        } else {
          // Username not found
          setErrorMessage({errorMessage: error.userName });
      
        }
    }
    const logout=()=>{
        setFormDetails(null)
    }

return <AuthContext.Provider value ={{isAuth, login,logout}}> {children}</AuthContext.Provider>
}

// export const requireAuth=()=>{
   
//     const auth= useAuth()

//     if(!auth.user){
//         Navigate('/login'); 
//     }
//     return(
//         <div>


//         </div>
//     )
// }

export const useAuth =()=>{
    return useContext(AuthContext)
}