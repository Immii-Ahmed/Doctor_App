import React, { useState } from "react";
import { Link} from "react-router-dom";
import image from "./favicon.svg";
import Links from "./component/Links";
import { useAuthProvider } from "../../Providers";
import useUsers from "../../Hooks/useUsers";

function Navbar({ children }) {
  const [isFocused, setIsFocused] = useState(false);
  const { cookies } = useAuthProvider();
  const { logout } = useUsers();

  const isAuthenticated = !!cookies.get('auth');

  return (
    <>
      <header className="fixed-top" id="km-header">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="km-navbar-brand text-lg-center">
            <div className="container">
              <button
                className={`navbar-toggler ${isFocused ? "outline-none" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img alt="Website Logo" className="img-fluid" src={image} style={{  maxWidth: '100px', height: 'auto'}} />
              </a>
              <div className="km-navbar-brand-btn-container">
                {
                  !isAuthenticated?
                  <>
                  <Link to="/login">LOGIN</Link> <Link to="/signup">SIGN UP</Link>
                  </> :<button className="btn btn-outline-dark" onClick={logout}>LOGOUT</button>
                }
              </div>
            </div>
          </div>
          <div className="km-navbar-menu">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <Links path={'/'} text='Home' />
                  <Links path={'/contactus'} text='Contact Us' />
                  <Links path={'/Services'} text='Services' />
                  <Links path={'/doctors'} text='Doctors' />
                  {
                  isAuthenticated &&
                        <li className="nav-item km-cart d-flex align-items-center" style={{ paddingTop: '10px' }}>
                            <Link className="nav-link" to="/apointments" 
                            >
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex justify-content-center align-items-center"
                            style={{top:'10px', padding: '4px'}}>
                              0
                            </span>
                              Appointments
                            </Link>
                      </li>
                }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}

export default Navbar;
