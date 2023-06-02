import React, {Component} from 'react';

class Result extends Component{
    render() {
      return (
        <div className="Result justify-content-center text-center">
            <br /><br /><br /><br /><br />
            <h1>{this.props.value}</h1>
            <br /><br /><br />
        </div>
      );
    }
}

export default Result;
