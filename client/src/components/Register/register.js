import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import ErrorAlert from "../Alert/alert";
import "./register.css";

function Register() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    name: "",
    userName: "",
    password: "",
  });

  // login button
  const toLoginPage = () => {
    navigate("/login");
  };
  //register button
  const handleRegister = (e) => {
    e.preventDefault();
    //authenticate registration with the values from formField
    auth.register(formDetails);
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
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Name"
              onChange={(e) => {
                setFormDetails({ ...formDetails, name: e.target.value });
              }}
              value={formDetails.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label> Username</Form.Label>
            <Form.Control
              type="userName"
              placeholder="Username"
              onChange={(e) => {
                setFormDetails({ ...formDetails, userName: e.target.value });
              }}
              value={formDetails.userName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setFormDetails({
                  ...formDetails,
                  password: e.target.value,
                });
              }}
              value={formDetails.password}
            />
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
  );
}

export default Register;
