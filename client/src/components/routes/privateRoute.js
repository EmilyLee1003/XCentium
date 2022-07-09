import {
    Navigate
  } from 'react-router-dom';

import { useAuth } from '../Auth/Auth'; 

export const PrivateRoute = ({ children }) => {
    const auth = useAuth()
    return auth.isAuth ? children : <Navigate to="/login" />;
  };