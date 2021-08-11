import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import "./Login.css";
import { startLoginWithEmail } from "../../actions/auth";
import HeaderScreen from "./HeaderScreenPublic";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmail(email, password));
  };

  return (

    
    <div className="bg-gradient-login">

        <div className="hero__background">
            <video autoPlay="" loop="" muted="" >
                  <source src="../main.mp4" />
            </video>
        </div>
      <HeaderScreen />

      <div className="row text-center">
        <div className="col-10 p-5 mt-5 login">
          <img id="logo" src="../../assets/Logo1old.png" />

          <h4 id="welcome">
            ADVOCACY. COMMUNITY. EDUCATION. RESOURCES. REWARDS{" "}
          </h4>

          <form method="POST" className="form-group" onSubmit={handleSubmit}>
            <center>
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="form-control"
                required
              />
              <br />

              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="form-control"
                required
              />
              <br />

              <button id="submit" className="btn btn-outline-info btn-block">
                Login
              </button>
              <br />
              <br />

              <center>
                <Link to="/auth/register" className="btn btn-primary">
                  {" "}
                  Sign-Up{" "}
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" className="btn btn-primary">
                  {" "}
                  Forgot your password?{" "}
                </a>
              </center>
              <br />
              <br />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};
