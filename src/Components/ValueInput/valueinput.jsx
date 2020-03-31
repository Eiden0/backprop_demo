import React, { Component } from 'react';
import "./valueinput.css";

class ValueInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'min': null,
            'max': null
        };
    }

    onValueChange(metric, ev) {
        if (this.props.name !== "between") {
            this.props.onValueChange(metric, ev, ev.target.value);
        }
        else {
            console.log('blah');
            this.props.onValueChange(metric, ev, ev.target.value);
        }
    }

    render() {
        const metric = this.props.metric;

        if (this.props.name !== "between") {
            return (
                <input
                    type="number"
                    id={this.props.id}
                    name={this.props.name}
                    onChange={(ev) => { this.onValueChange(metric, ev) }}
                />
            )
        }

        return (
            <React.Fragment>
                <label htmlFor="min">Minimum:</label>
                <input type="number" id="min" name="min" onChange={(ev) => { this.onValueChange(metric, ev) }} />
                <span>
                    <label htmlFor="max">Maximum:</label>
                    <input type="number" id="max" name="max" onChange={(ev) => { this.onValueChange(metric, ev) }} />
                </span>
            </React.Fragment>
        )
    }
}

export default ValueInput;