import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import term from "./assets/term.png";
const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="content justify-content-center align-items-center d-flex shadow-lg">
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <div className="right-box me-4">
              <h1>Welcome Back</h1>
              <p>
                to keep connected with us please login with your personal info
              </p>
              <Link
                to="/login"
                className="signup btn btn-transparent btn-outline-light"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex text-center">
          <form action="" className="">
            <div className="header-text mb-4">
              <h1>Create Account</h1>
              <p>Dont have an account yet?</p>
              <p>
                Lets get your set uo so you can start creating your first
                onboarding experience
              </p>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="arunasita"
              />
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
                <label className="form-check-label">
                  I accept TajaMentawai{"'"}s{" "}
                  <a href="#" onClick={handleShow}>
                    Term and Conditions
                  </a>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <img src={term} />
                      <h4>
                        Term and Conditions <br />
                        <p className="text-muted fs-6">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </h4>
                    </Modal.Header>
                    <Modal.Body>
                      <ol>
                        <li>
                          <h6>Lorem ipsum dolor sit amet.</h6>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                          <h6>Lorem ipsum dolor sit amet.</h6>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                          <h6>Lorem ipsum dolor sit amet.</h6>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                          <h6>Lorem ipsum dolor sit amet.</h6>
                          <ul>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                          </ul>
                        </li>
                      </ol>
                    </Modal.Body>
                  </Modal>
                </label>
              </div>
            </div>
            <div className="input-group mb-3 d-grid">
              <button className="btn btn-lg btn-outline-primary">
                Sign Up
              </button>
            </div>
            <p>Or Sign up with</p>
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
      </div>
    </>
  );
};

export default Signup;
