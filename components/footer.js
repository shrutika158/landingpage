import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row"></div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo"></div>
                <div class="footer-text">
                  <p>
                    InternNexus is a rising platform for connecting students and
                    companies by providing internships to students As well as
                    consulting to the startups or companies for the technology
                    advancements with technical support in the form of resource
                    deployment or remote work.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h5>USEFUL LINKS</h5>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h5>TERMS OF USE</h5>
                </div>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h5>OTHERS</h5>
                </div>
                <ul>
                  <li>
                    <a href="#">User</a>
                  </li>
                  <li>
                    <a href="#">Guide</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h5>SOCIAL MEDIA </h5>
                  <div class="footer-social--icons">
                    <div>
                      <FaFacebookF class="icons" />
                      </div>
                      <div>
                        <FaTwitter class="icons" />
                        </div>
                        <div>
                          <FaLinkedin class="icons" />
                          </div>
                          <div>
                            <FaInstagram class = "icons" />
                            </div>
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div className='text-center'>
              <div class="copyright-text">
                <p>
                  &copy; 2023 TechIntelliverse Private Limited. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
