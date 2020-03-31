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
        console.log(ev.target.id);
        console.log(ev.target.value);
        console.log(this.state);

        if (this.props.name !== "between") {
            this.props.onValueChange(metric, ev.target.value);
        }
        else {
            if (ev.target.id === "min") {
                if (this.state.max !== null && this.state.max !== '') {
                    const value = {
                        'min': ev.target.value,
                        'max': this.state.max
                    }
                    this.props.onValueChange(metric, value);
                }
                else {
                    this.setState({
                        'min': ev.target.value
                    })
                }
            }
            else {
                if (this.state.min !== null && this.state.min !== '') {
                    console.log('yaya');
                    const value = {
                        'min': this.state.min,
                        'max': ev.target.value
                    }
                    this.props.onValueChange(metric, value);
                }
                else {
                    this.setState({
                        'max': ev.target.value
                    })
                }
            }
        }
    }

    render() {
        const metric = this.props.metric;
        const min = this.props.min;
        const max = this.props.max;

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
                <input type="number" id="min" name="min" value={min} onChange={(ev) => { this.onValueChange(metric, ev) }} />
                <span>
                    <label htmlFor="max">Maximum:</label>
                    <input type="number" id="max" name="max" value={max} onChange={(ev) => { this.onValueChange(metric, ev) }} />
                </span>
            </React.Fragment>
        )
    }
}

export default ValueInput;