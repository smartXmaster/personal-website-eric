import React, { Component } from "react";

class Splashpage extends Component {
  render() {
    return (
      <div
        className="Splashpage d-flex p-3 mx-auto flex-column justify-content-center text-center text-white"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/background.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      >
        <main className="px-3">
          <h1 style={{ fontSize: "100px" }}>Eric Johnson</h1>
          <h3 className="lead" style={{ fontSize: "70px" }}>
            Senior Software Engineer
          </h3>
        </main>
      </div>
    );
  }
}

export default Splashpage;
