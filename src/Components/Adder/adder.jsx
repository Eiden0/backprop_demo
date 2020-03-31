import React, { Component } from 'react';
import "./adder.css"
import Select from 'react-select'
import logo from "../../static/adder/blue-plus-icon.png";

class Adder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ selectedOption: e.value }, () => console.log(this.state));
    }

    onClick(option) {
        if (option != null) {
            this.props.handleOnClickPlus(option);
            console.log(option);
        }
    }

    render() {
        const options = this.props.options;
        return (
            <span>
                <div className="select">
                    <Select options={options} className="select-outer-box" onChange={this.handleChange} />
                </div>
                <div className="plus"><img src={logo} alt="plus" onClick={() => { this.onClick(this.state.selectedOption) }} /></div>
            </span>
        )
    }
}

export default Adder;