import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div
        className="Skills d-flex p-3 mx-auto flex-column text-center text-white bg-dark"
        id="skills"
        style={{ height: "auto", minHeight: "600px", position: "relative" }}
      >
        <hr size="10" style={{ backgroundColor: "DodgerBlue" }} />
        <main className="px-3">
          <h1 style={{ fontSize: "50px" }}>Skills</h1>
          <span className="lead">
            <br />
            <br />
            <br />
            <br />
            <div className="row justify-content-center">
              <div className="col-md-3 mb-4">
                <p style={{ fontSize: "30px" }}>
                  JavaScript, TypeScript, React, Next, Svelte, Ember, Vue, Nuxt,
                  Angular, Shopify, WordPress
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <p style={{ fontSize: "30px" }}>
                  Python, Django, Java, Ruby on Rails, Node, Nest, SQL, NoSQL,
                  Rust, Golang
                </p>
              </div>
              <div className="col-md-3 mb-4">
                <p style={{ fontSize: "30px" }}>
                  Web3, Solana, Solidity, CI/CD, AWS, Docker, Git, GitHub,
                  GitLab, BitBucket
                </p>
              </div>
            </div>
          </span>
        </main>
      </div>
    );
  }
}

export default Skills;
