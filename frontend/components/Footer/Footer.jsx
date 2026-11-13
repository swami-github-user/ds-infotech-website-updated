"use client";
import "./Footer.css";
import { MapPin } from "lucide-react";

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
              <span>Maharashtra, India</span>
            </div>

            <a href="#contact">Send an Inquiry</a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 DS Infotech. All Rights Reserved.
          </p>

          <p className="footer-disclaimer">
            DS Infotech is an independent training provider and is not
            affiliated with, authorized or endorsed by Amazon Web Services.
            AWS and related marks are trademarks of Amazon.com, Inc. or its
            affiliates.
          </p>

        </div>

      </footer>
    </>
  );
};

export default Footer;