import React, {Component} from 'react';
import Select from 'react-select'
import './table.css'

const options = [
  { value: '>', label: 'greater than' },
  { value: '<', label: 'less than' },
  { value: '=', label: 'equal to' },
  { value: '><', label: 'between' },
];

class Table extends Component{
    constructor(props) {
        super(props);
        this.state ={
            optionArray : [],
            conditionValue : null

        };
        console.log('constructor');
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({conditionValue : e.value},() => {console.log('condition change handled')})
    }

    // // componentDidUpdate(prevProps, prevState, snapshot) {
    //             this.setState({
    //                 optionArray : prevState.optionArray.push(this.props.option)
    //             })
    //     }

    render() {
        console.log('render table 1');
        const value = function (v) {
            if(v.conditionValue === '>'){
                return(
                    <th><input type="number" id=">" name="greaterThan"/></th>
                )
            }
            else if(v.conditionValue === '<'){
                return(<th><input type="number" id="<" name="lessThan"/></th>)
            }
            else if(v.conditionValue === '='){
                return(<th><input type="number" id="=" name="equalTo"/></th>)
            }
            else if(v.conditionValue === '><'){
                return(
                    <th>
                        <label htmlFor="min">Minimum:</label>
                        <input type="number" id="min" name="min"/>
                        <span>
                        <label htmlFor="max">Maximum:</label>
                        <input type="number" id="max" name="max"/>
                        </span>
                    </th>
                )
            }
            else return null
        };
        if(this.props.option !== null) {
            console.log('render table 2');
                return (
                    <div className="table">
                        <table style={{width: "60%"}}>
                            <tbody>
                            <tr>
                                <th>{this.props.option}</th>
                                <th><Select options={options} onChange={this.handleChange} /></th>
                                {value(this.state)}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
        }
        else return null
}}
export default Table;
