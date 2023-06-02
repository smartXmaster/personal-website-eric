import React, { useState } from "react";

const Footer = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div
      className="Footer"
      style={{ bottom: "0", position: "fixed", width: "100%" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#363636" }}
      >
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <p
            className="mr-auto"
            style={{
              display: "inline-block",
              margin: "15px",
              fontSize: "20px",
              color: "grey",
            }}
          >
            Eric Johnson &#169; 2021 v1.0
          </p>
          <div className="navbar-nav mx-auto">
            <a
              className="nav-link"
              href="https://github.com/mastercodercat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "24px" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/GithubIcon.png"}
                alt="GitHub Icon"
                width="30"
                height="30"
                style={{ display: "inline-block", margin: "10px" }}
              />
              GitHub
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/ericjohnson0214/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "24px" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/linkedinIcon.png"}
                alt="LinkedIn Icon"
                width="30"
                height="30"
                style={{ display: "inline-block", margin: "10px" }}
              />
              LinkedIn
            </a>
            <a
              className="nav-link"
              href="mailto:ericjohnson0214@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                margin: "5px",
                fontSize: "24px",
              }}
            >
              ericjohnson0214@gmail.com
            </a>
          </div>
          <p
            className="mr-auto"
            style={{
              display: "inline-block",
              margin: "15px",
              fontSize: "20px",
              color: "grey",
            }}
          >
            Built with React JS
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
