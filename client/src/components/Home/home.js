import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import NavBar from "../NavBar/navBar";
import picture from "../Picture/maldives.jpg";
import "./home.css";

export default function Home() {
  const auth = useAuth();
  let navigate = useNavigate();

  const logOut = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <NavBar button={logOut}></NavBar>
      <div className="userDetails"></div>

      <div
        style={{
          backgroundImage: `url(${picture})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ minHeight: "550px" }}>
          <div className="text-center justify-content-center align-self-center">
            <h1 className="pt-5 pb-3">Hello {auth.currentUser.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
