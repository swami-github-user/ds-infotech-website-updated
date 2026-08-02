"use client";
import "./Footer.css";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-divider"></div>

      <footer className="footer">
        <div className="footer-container">

          {/* LEFT */}

          <div className="footer-brand">

            <h2>
              <span className="logo-dark">DS</span>{" "}
              <span className="logo-orange">Infotech</span>
            </h2>

            <span className="footer-tag">
              Technology Enablement Partner
            </span>

            <p>
              Helping organizations build Cloud, DevOps,
              AI and GenAI capabilities through
              practical enterprise learning.
            </p>

            <div className="footer-social">

              <a href="#">
                <FaLinkedinIn size={18}/>
              </a>

              <a href="#">
                <FaGithub size={20}/>
              </a>

              <a href="#">
                <FaYoutube size={18}/>
              </a>

            </div>

          </div>

          {/* COMPANY */}

          <div className="footer-column">

            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Solutions</a>
            <a href="#">Services</a>
            <a href="#">Industries</a>
            <a href="#">Contact</a>

          </div>

          {/* SOLUTIONS */}

          <div className="footer-column">

            <h4>Solutions</h4>

            <a href="#">AWS Training</a>
            <a href="#">DevOps</a>
            <a href="#">Generative AI</a>
            <a href="#">Corporate Training</a>
            <a href="#">Custom Learning</a>

          </div>

          {/* TECHNOLOGIES */}

          <div className="footer-column">

            <h4>Technologies</h4>

            <a href="#">AWS</a>
            <a href="#">Docker</a>
            <a href="#">Terraform</a>
            <a href="#">Kubernetes</a>
            <a href="#">Amazon Bedrock</a>

          </div>

          {/* CONTACT */}

          <div className="footer-column">

            <h4>Contact</h4>

            <div className="footer-contact">
              <MapPin size={18}/>
              <span>Kolhapur, Maharashtra</span>
            </div>

            <div className="footer-contact">
              <Mail size={18}/>
              <span>info@dsinfotech.com</span>
            </div>

            <div className="footer-contact">
              <Phone size={18}/>
              <span>+91 XXXXX XXXXX</span>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 DS Infotech. All Rights Reserved.
          </p>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <span>Made with ❤️ in India</span>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;