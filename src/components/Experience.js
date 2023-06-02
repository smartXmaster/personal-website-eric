import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div
        className="Experience d-flex p-3 mx-auto flex-column text-center text-white bg-dark"
        id="experience"
        style={{
          height: "auto",
          minHeight: "1030px",
          position: "relative",
          marginBottom: "50px",
        }}
      >
        <hr size="10" style={{ backgroundColor: "DodgerBlue" }} />
        <main className="px-3">
          <h1 style={{ fontSize: "50px" }}>Experience</h1>
          <span className="lead" style={{ fontSize: "25px" }}>
            <br />
            <br />
            <h3>Create Inc, United States, Remote</h3>
            <i>Senior Full-Stack Engineer</i>. Feb 2022 - Current.
            <br /> <br />
            <h3>Esprezzo, United States, Remote</h3>
            <i>Senior Full-Stack Developer</i>. Nov 2018 - Feb 2022.
            <br /> <br />
            <h3>Premise Health, United States, Remote</h3>
            <i>Senior Full-Stack Developer</i>. Mar 2017 - Nov 2018
            <br /> <br />
            <h3>Dynatrace, United States, Hybrid</h3>
            <i>Full-Stack Developer</i>. Nov 2015 - Mar 2017
            <br /> <br />
            <h3>Fordham University</h3>
            <i>Bachelor of Science (BS)</i>. May 2011 - Sep 2015
          </span>
        </main>
      </div>
    );
  }
}

export default Experience;
