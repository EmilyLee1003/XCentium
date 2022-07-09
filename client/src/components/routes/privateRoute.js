import {
    Navigate
  } from 'react-router-dom';

import { useAuth } from '../Auth/Auth'; 

// const tt1 ={user:""}
// const tt2 ={user:"john"}

// console.log(!tt1)
// console.log(!tt2)

export const PrivateRoute = ({ children }) => {
    const auth = useAuth()
    return auth.isAuth ? children : <Navigate to="/login" />;
  };