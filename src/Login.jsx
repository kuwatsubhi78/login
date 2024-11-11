import { Link } from "react-router-dom";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
function Login() {
  return (
    <>
      <div className="content justify-content-center align-items-center d-flex shadow-lg">
        <div className="col-md-6 d-flex text-center">
          <form action="">
            <div className="header-text mb-4">
              <h1>Login to TajaMentawai</h1>
              <p>Welcome back! Please Login to your account.</p>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="arunasita@gmail.com"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg"
              />
            </div>
            <div className="input-group mb-3 d-flex justify-content-between">
              <div className="form-check">
                <input type="checkbox" className="form-check-input me-2" />
                <label className="form-check-label">Remember me</label>
              </div>
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <div className="input-group mb-3 d-grid">
              <button className="btn btn-lg btn-outline-primary login">
                Login
              </button>
            </div>
            <p>Or Login with</p>
            <div className="input-group mb-3 d-grid">
              <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item">
                  <a href="#">
                    <img src={google} width={25} alt="" />
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#">
                    <img src={facebook} width={25} alt="" />
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#">
                    <img src={twitter} width={25} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <div className="right-box">
              <h1>Hello, Everyone</h1>
              <p>
                Enter your personal details
                <br /> and start journey with us
              </p>
              <Link
                to="/signup"
                className="signup btn btn-transparent btn-outline-light"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
