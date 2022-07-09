import react from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useAuth} from '../Auth/Auth'

export default function Home(){

  const auth = useAuth(); 
let navigate = useNavigate(); 


const logOut=()=>{
  auth.logout()
navigate('/login')
}

return(
    <div>
  <h1> welcome</h1>
  <Button variant="primary" onClick={logOut}>Log Out</Button>
    </div>
)
}
