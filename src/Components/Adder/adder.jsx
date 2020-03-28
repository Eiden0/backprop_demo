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

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.OnClick = this.onClick.bind(this);
    }

    handleChange(e){
        this.props.handleOptionChange(e.value);
    }

    onClick(option){
        this.props.handleOnClickPlus(option);
        console.log(option)
    }

    render() {
        const option = this.props.selectedOption;
        return(
            <span>
                <div className="select">
                    <Select options={options} className="select-outer-box" onChange={this.handleChange}/>
                </div>
                <div className="plus"><img src={logo} alt="plus" onClick={() => {this.onClick(option)}}/></div>
            </span>
        )
    }
}

export default Adder;