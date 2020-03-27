import React, {Component} from 'react';
import "./adder.css"
import Select from 'react-select'
import logo from "../../static/adder/blue-plus-icon.png";

const options = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
  { value: 'F', label: 'F' },
  { value: 'G', label: 'G' },
  { value: 'H', label: 'H' },
];

class Adder extends Component{

    render() {
        return(
            <span>
                <div className="select">
                    <Select options={options} className="select-outer-box"/>
                </div>
                <div className="plus"><img src={logo} alt="plus"/></div>
            </span>
        )
    }
}

export default Adder;