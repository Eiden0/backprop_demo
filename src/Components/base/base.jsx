import React, { Component } from 'react';
import "./base.css"
import Adder from "../Adder/adder";
import Table from "../Table/table";

const conditions = [
    { value: '>', label: 'greater than' },
    { value: '<', label: 'less than' },
    { value: '=', label: 'equal to' },
    { value: '><', label: 'between' },
];

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
                { value: 'E', label: 'E' },
                { value: 'F', label: 'F' },
                { value: 'G', label: 'G' },
                { value: 'H', label: 'H' },
            ],
            tableRows: []
        };
        this.handleOnClickPlus = this.handleOnClickPlus.bind(this);
        this.handleOnConditionChange = this.handleOnConditionChange.bind(this);
        this.handleOnValueChange = this.handleOnValueChange.bind(this);
    }

    handleOnClickPlus(option) {
        this.setState(previousState => ({
            options: previousState.options.filter(x => x['value'] !== option),
            tableRows: [...previousState.tableRows, {
                'metric': option,
                'condition': conditions[0],
                'value': ''
            }]
        }), () => { console.log(this.state) });
    }

    handleOnConditionChange(key, condition) {
        this.setState(previousState => ({
            tableRows: previousState.tableRows.map(x => x)
        }), () => { console.log(this.state) });
    }

    handleOnValueChange(key, value) {
        
    }

    render() {
        console.log('render base');
        return (
            <div className="base_table">
                <h2 className="header">New Linear Policy</h2>
                <Table
                    tableRows={this.state.tableRows}
                    conditions={conditions}
                    onConditionChange={this.handleOnConditionChange}
                    onValueChange={this.handleOnValueChange}
                />
                <Adder options={this.state.options} handleOnClickPlus={this.handleOnClickPlus} />
            </div>
        )
    }
}
export default Base;