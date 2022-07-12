import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import ErrorAlert from "../Alert/alert";
import "./login.css";

export default function Login() {
  const [formField, setFormField] = useState({ userName: "", password: "" });
  const auth = useAuth();

  // change url
  let navigate = useNavigate();

  //register button
  const toRegisterPage = () => {
    navigate(`/register`);
  };

  //handles when the login for is submitted
  const handleLogin = (e) => {
    //prevents the page from reloading
    e.preventDefault();
    //authenticate login with the values from formField
    auth.login(formField);
  };

  return (
    <div>
      <div className="form">
        {auth.errorMessage.map((e) => (
          <div key={e}>
            <ErrorAlert message={e}> </ErrorAlert>
          </div>
        ))}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setFormField({ ...formField, userName: e.target.value });
              }}
              value={formField.userName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setFormField({ ...formField, password: e.target.value });
              }}
              value={formField.password}
            />
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
  );
}
