import React, {Component} from 'react';

class KeyPad extends Component {

    handleButtonPress(val) {
        this.props.onButtonPress(val);
    }

    render() {
      return (
        <div className="KeyPad">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-1 mb-4">
                        <button name="%" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "%")}>%</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="CE" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "CE")}>CE</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="+/-" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "+/-")}>+/-</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="C" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "C")}>C</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-1 mb-4">
                        <button name="1" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "1")}>1</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="2" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "2")}>2</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="3" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "3")}>3</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="+" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "+")}>+</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-1 mb-4">
                        <button name="4" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "4")}>4</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="5" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "5")}>5</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="6" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "6")}>6</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="-" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "-")}>-</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-1 mb-4">
                        <button name="7" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "7")}>7</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="8" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "8")}>8</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="9" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "9")}>9</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="*" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "*")}>*</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-1 mb-4">
                        <button name="." className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, ".")}>.</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="0" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "0")}>0</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="=" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "=")}>=</button>
                    </div>
                    <div className="col-md-1 mb-4">
                        <button name="/" className="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} onClick={this.handleButtonPress.bind(this, "/")}>/</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default KeyPad;
