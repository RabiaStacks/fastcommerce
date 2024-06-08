
import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from "../../assets/images/logo.jpeg"

const Footer = () => {
  return (
    <div>

      <footer id="footer">
        <div className="container ">
          <div className="row m-0 pt-5">
            <div className="col-sm-6 col-lg-3 my-3">
              <div className="footer-menu">
                <Link to="/">
                  <img src={footerlogo} alt="logo" className="pcs img-fluid" />
                </Link>
                <div className="social-links mt-4">
                  <ul className="d-flex list-unstyled ">
                    <li className="me-4">
                      <a href="#">
                        <i className="ri-facebook-circle-fill" />
                      </a>
                    </li>
                    <li className="me-4">
                      <a href="#">
                        <i className="ri-twitter-fill tuo" />
                      </a>
                    </li>
                    <li className="me-4">
                      <a href="#">
                        <i className="ri-instagram-line ins" />
                      </a>
                    </li>
                    <li className="me-4">
                      <a href="#">
                        <i className="ri-linkedin-box-fill lni" />
                      </a>
                    </li>
                    <li className="me-4">
                      <a href="#">
                        <i className="ri-youtube-fill yo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 my-3">
              <div className="footer-menu">
                <h5 className=" fw-bold mb-4 text-white">Quick Links</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Home
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      About us
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Courses
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Blogs
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" />
                    <a href="contact.html" style={{ color: "black" }}>
                      Contac
                    </a>
                    t
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 my-3">
              <div className="footer-menu">
                <h5 className=" fw-bold mb-4 text-white">About</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      How It Works
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Pricing
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Promotion
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Affilation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 my-3">
              <div className="footer-menu">
                <h5 className=" fw-bold mb-4 text-white">Help Center</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Payments
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      FAQs
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Checkout
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Other
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-3">
              <div className="footer-menu">
                <h5 className=" fw-bold mb-4 text-white">Contact Us</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item mb-2">
                    <a
                      href="#"
                      className="footer-link text-truncate"
                      style={{ color: "black" }}
                    >
                      abc@ecommerce.com
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      0608-361136
                    </a>
                  </li>
                  <li className="menu-item mb-2">
                    <a href="#" className="footer-link" style={{ color: "black" }}>
                      Lodhran, Pakistan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer