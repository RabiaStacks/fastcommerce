import React from 'react';
import "./navStyle.css"
import logo from "../../assets/images/logo.jpeg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* <div className='navHelo'>helo</div> */}
      <nav className="main-menu d-flex navbar navbar-expand-lg bg-white sticky-top">
        <div className="container">

          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header mt-3">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body justify-content-between">
              <div className="main-logo">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-fluid" style={{width:"150px"}} />
                </Link>
              </div>

              <ul className="navbar-nav menu-list list-unstyled align-items-lg-center d-flex gap-md-3 mb-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-2 active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events" className="nav-link mx-2 active">Events</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link mx-2 active">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link mx-2 active">Contact</Link>
                </li>
              </ul>

              <div className="d-none d-lg-flex align-items-center">
                <ul className="d-flex align-items-center list-unstyled m-0">
                  <li>
                    <a href="#" className="ms-3">
                      <span className="stylo"><i className="ri-account-circle-line"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ms-3">
                      <span className="stylo"><i className="ri-heart-2-line"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ms-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      <span className="stylo"><i className="ri-shopping-bag-line"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ms-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                      <span className="stylo"><i className="ri-search-line"></i></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-lg-none">
          <div className="d-flex align-items-end mt-3">
            <ul className="d-flex align-items-center list-unstyled m-0">
              <li>
                <a href="#" className="me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                    <use href="#user-circle"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                    <use href="#heart"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                    <use href="#shopping-bag"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                    <use href="#search"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
