import React, {Component} from 'react';

import KeyPad from "./KeyPad"
import Result from "./Result"

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.handeNewInput = this.handeNewInput.bind(this)
        this.state = {result: "0"};
        this.lastOp = "";
        this.lastVal = "0";
        this.currentVal = "0";
        this.lastPressedWasOp = false;
      }

    calculate(val) {

        try {

            if (/^\d+$/.test(val)) {
                if (this.lastPressedWasOp) {
                    this.currentVal = val;
                    this.lastPressedWasOp = false;
                    return this.currentVal;
                }
                else {
                    if (this.currentVal === "0") {
                        this.currentVal = val;
                        return this.currentVal;
                    }
                    else {
                        this.currentVal += val;
                        return this.currentVal;
                    }
                }
            }

            else if (val === ".") {
                this.currentVal += ".";
                return this.currentVal;
            }

            else if (val === "+" || val === "-" || val === "*" || val === "/") {
                this.lastPressedWasOp = true;
                if (this.lastOp === "") {
                    this.lastVal = this.currentVal;
                    this.lastOp = val;
                    return this.currentVal;
                }
                else {
                    // eslint-disable-next-line
                    this.lastVal = eval(this.lastVal + this.lastOp + this.currentVal).toString();
                    this.lastOp = val;
                    this.currentVal = "0";
                    return this.lastVal;
                }
            }

            else if (val === "=") {
                this.lastPressedWasOp = true;
                // eslint-disable-next-line
                this.currentVal = eval(this.lastVal + this.lastOp + this.currentVal).toString();
                this.lastVal = "0";
                this.lastOp = "";
                return this.currentVal;
            }

            else if (val === "CE") {
                this.lastPressedWasOp = false;
                this.lastVal = "0";
                this.currentVal = "0";
                this.lastOp = "";
                return "0";
            }

            else if (val === "%") {
                // eslint-disable-next-line
                this.currentVal = eval(this.currentVal + " / 100").toString()
                return this.currentVal;
            }

            else if (val === "+/-") {
                // eslint-disable-next-line
                this.currentVal = eval("-1 * " + this.currentVal).toString()
                return this.currentVal;
            }

            else if (val === "C") {
                this.currentVal = "0";
                return "0";
            }

            return this.currentVal;
        }
        catch (error){
            this.lastPressedWasOp = false;
            this.lastVal = "0";
            this.currentVal = "0";
            this.lastOp = "";
            return "ERROR";
        }
    }

    handeNewInput(val) {
        var value = this.calculate(val);
        this.setState({result: value});
    }

  render() {
      return (
        <div className="Calculator" >
            <Result value={this.state.result}/>
            <KeyPad onButtonPress={this.handeNewInput} />
        </div>
      );
  }
}

export default Calculator;
