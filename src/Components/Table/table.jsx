import React, { Component } from 'react';
import Select from 'react-select'
import './table.css'
import ValueInput from "../ValueInput/valueinput.jsx";

class Table extends Component {
    constructor(props) {
        super(props);
    }

    onConditionChange(metric, condition) {
        const temp_metric = this.props.tableRows.filter(x => x.metric === metric)[0];
        if (condition.value != temp_metric.condition.value) {
            this.props.onConditionChange(metric, condition);
        }
    }

    onValueChange(metric, ev) {
        this.props.onValueChange(metric, ev, ev.target.value);
    }

    render() {
        console.log('render table 1');
        const value = (v) => {
            if (v.condition.value === '>') {
                return (
                    <th>
                        <ValueInput metric={v.metric} name="greaterThan" id=">" onValueChange={this.onValueChange.bind(this)} />
                    </th>
                )
            }
            else if (v.condition.value === '<') {
                return (
                    <th>
                        <ValueInput metric={v.metric} name="lessThan" id="<" onValueChange={this.onValueChange.bind(this)} />
                    </th>
                )
            }
            else if (v.condition.value === '=') {
                return (
                    <th>
                        <ValueInput metric={v.metric} name="equalTo" id="=" onValueChange={this.onValueChange.bind(this)} />
                    </th>
                )
            }
            else if (v.condition.value === '><') {
                return (
                    <th>
                        <ValueInput metric={v.metric} name="between" id="[]" onValueChange={this.onValueChange.bind(this)} />
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
                <tr key={row.metric}>
                    <th>{row.metric}</th>
                    <th><Select options={conditions} value={row.condition} onChange={(condition) => { this.onConditionChange(row.metric, condition) }} /></th>
                    {value(row)}
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
