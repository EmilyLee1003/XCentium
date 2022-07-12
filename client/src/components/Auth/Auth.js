import { useState, createContext, useContext, useEffect } from "react";
import { validUsers, error } from "../../data";
import { useNavigate } from "react-router-dom";

// set the local storage up with data from CSV file
if (localStorage.getItem("users") == null) {
  localStorage.setItem("users", JSON.stringify(validUsers));
}

//Authentication set up
const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [formDetails, setFormDetails] = useState({
    userName: "",
    password: "",
  });
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  // change URL
  let navigate = useNavigate();

  const login = (formDetails) => {
    setFormDetails(formDetails);

    const storedUser = localStorage.getItem("users");

    //find the userName where the userName exists in local storage
    const userData = JSON.parse(storedUser).find(
      (user) => user.userName === formDetails.userName
    );

    //If thee userName does exists:
    if (userData) {
      // check if thee password does not match
      if (userData.password !== formDetails.password) {
        // then set the error message
        setErrorMessage([error.password]);
      } else {
        //if password matches, set the authentication to true
        setIsAuth(true);
        //redirect to home page
        navigate(`/home`);
        //set current user data to keep track of who is logged in
        setCurrentUser(userData);
      }
    } else {
      // Username not found
      setErrorMessage([error.userName]);
    }
  };

  const handleValidation = (registerDetails) => {
    //setting variables:
    let alphabet = /^[A-Za-z]+$/;
    let alphaNumeric = /^[a-zA-Z0-9]+$/;
    let specialChar = /^[ A-Za-z0-9_@./#&+-]*$/;
    const errorMessages = [];

    if (registerDetails) {
      // name does not contain only alphabet and has at most 10 characters
      if (
        !(
          registerDetails.name.match(alphabet) &&
          registerDetails.name.length <= 10 &&
          registerDetails.name.length > 0
        )
      ) {
        // push error messages into the error messages array
        errorMessages.push(error.invalidName);
      }

      // userName does not contain alphabet and/or numbers and has at most 10 characters
      if (
        !(
          registerDetails.userName.match(alphaNumeric) &&
          registerDetails.userName.length <= 10 &&
          registerDetails.userName.length > 0
        )
      ) {
        //push error messages into the error messages array
        errorMessages.push(error.invalidUserName);
      }

      // password does not contain alphanumeric and/or special characters and does not have 8 or more characters
      if (
        !(
          registerDetails.password.match(specialChar) &&
          registerDetails.password.length >= 5 &&
          registerDetails.password.length > 0
        )
      ) {
        //push error messages to error messages array
        errorMessages.push(error.invalidPassword);
      }
    }
    //set our useState error message with the errorMessages array
    setErrorMessage(errorMessages);
    //check if the login form has any error messages
    return errorMessages.length === 0;
  };

  const register = (registerDetails) => {
    setRegisterDetails(registerDetails);

    //call the handleValidation function
    const isValidated = handleValidation(registerDetails);
    // if all fields pass validation, add user to local storage and navigate to login page to login with new credentials
    if (isValidated) {
      setIsAuth(true);
      const users = JSON.parse(localStorage.getItem("users"));
      users.push(registerDetails);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/login");
    }
  };

  //log out
  const logout = () => {
    setFormDetails(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        errorMessage,
        login,
        logout,
        currentUser,
        handleValidation,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
