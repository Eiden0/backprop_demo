import React, { Component } from 'react';
import Select from 'react-select'
import './table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.handleOnValueChange = this.handleOnValueChange.bind(this);
    }

    onConditionChange(key, condition) {
        console.log(condition);
        console.log(key);
        this.props.onConditionChange(key, condition);
    }

    handleOnValueChange(key, value) {

    }

    render() {
        console.log('render table 1');
        const value = function (v) {
            if (v.value === '>') {
                return (
                    <th><input type="number" id=">" name="greaterThan" /></th>
                )
            }
            else if (v.value === '<') {
                return (<th><input type="number" id="<" name="lessThan" /></th>)
            }
            else if (v.value === '=') {
                return (<th><input type="number" id="=" name="equalTo" /></th>)
            }
            else if (v.value === '><') {
                return (
                    <th>
                        <label htmlFor="min">Minimum:</label>
                        <input type="number" id="min" name="min" />
                        <span>
                            <label htmlFor="max">Maximum:</label>
                            <input type="number" id="max" name="max" />
                        </span>
                    </th>
                )
            }
            else return null;
        };

        const conditions = this.props.conditions;
        const rows = [];

        this.props.tableRows.forEach((row) => {
            console.log(row);
            rows.push(
                <tr key={row['metric']}>
                    <th>{row['metric']}</th>
                    <th><Select options={conditions} value={row['condition']} onChange={(condition) => { this.onConditionChange(row['metric'], condition) }} /></th>
                    {value(row['condition'])}
                </tr>
            );
        });

        console.log('render table 2');
        return (
            <div className="table">
                <table style={{ width: "60%" }}>
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Condition</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;
