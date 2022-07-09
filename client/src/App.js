import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Login from './components/Login/login'
import Register from './components/Register/register'
import Home from './components/Home/home'
import {AuthProvider} from './components/Auth/Auth'
import {PrivateRoute} from './components/routes/privateRoute'
import './App.css';

function App() {
  return (
    <div className="App">
  <AuthProvider> 
    <Routes>
      <Route path="/home" element={ <PrivateRoute> <Home /></PrivateRoute>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </AuthProvider>
    </div>
  );
}

export default App;
