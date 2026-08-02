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

            <h4>Training Programs</h4>

            <a href="#training-programs">AWS Certifications</a>
            <a href="#training-programs">Corporate Training</a>
            <a href="#training-programs">AI & ML Programs</a>
            <a href="#training-programs">Containers on AWS</a>
            <a href="#training-programs">GenAI on AWS</a>
            <a href="#contact">Career Guidance</a>

          </div>

          {/* SOLUTIONS */}

          <div className="footer-column">

            <h4>AWS Certifications</h4>

            <a href="#training-programs">Cloud Practitioner</a>
            <a href="#training-programs">Solutions Architect Associate</a>
            <a href="#training-programs">Developer Associate</a>
            <a href="#training-programs">SysOps Administrator</a>
            <a href="#training-programs">DevOps Professional</a>
            <a href="#training-programs">Security Specialty</a>

          </div>

          {/* TECHNOLOGIES */}

          <div className="footer-column">

            <h4>Learning Domains</h4>

            <a href="#training-programs">Cloud Computing</a>
            <a href="#training-programs">DevOps</a>
            <a href="#training-programs">Generative AI</a>
            <a href="#training-programs">Containers</a>
            <a href="#training-programs">Cloud Security</a>
            <a href="#training-programs">Development</a>

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
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;