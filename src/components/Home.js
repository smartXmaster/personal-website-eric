import React, {Component} from 'react';
import Splashpage from "./Splashpage"
import About from "./About"
import Skills from "./Skills"
import Experience from "./Experience"

class Home extends Component {
    render() {
      return (
        <div className="Home">
            <Splashpage />
            <About />
            <Skills />
            <Experience />
        </div>
      );
  }
}

export default Home;
