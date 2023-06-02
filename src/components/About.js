import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div
        className="About d-flex p-3 mx-auto flex-column text-center text-white bg-dark"
        id="about"
        style={{ height: "auto", minHeight: "650px", position: "relative" }}
      >
        <main className="px-3">
          <h1 style={{ fontSize: "50px" }}>About</h1>
          <p
            className="lead"
            style={{ paddingLeft: "20%", paddingRight: "20%" }}
          >
            <br />
            <br />
            Extremely experienced in web development especially, with over 7
            years of experience.
            <br />
            <br />
            I got an excellent reputation for resolving problems and improving
            users' satisfaction.
            <br />
            <br />
            I have extensive knowledge of front-end JavaScript and browser APIs
            as well as significant experience with popular frameworks and
            libraries.
            <br />
            <br />
            My deep full-stack experience includes Node.js as well as other
            technologies like PHP, and Python.
            <br />
            <br />
            Since I am detail-oriented and I have excellent teamwork skills, I
            am suitable for a full-time position that offers professional
            challenges that require interpersonal skills, excellent time
            management and problem-solving skills.
          </p>
        </main>
      </div>
    );
  }
}

export default About;
