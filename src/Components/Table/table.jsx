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
            if(v === '>'){
                return(
                    <th><input type="number" id=">" name="greaterThan"/></th>
                )
            }
            if(v === '<'){
                return(<th>less than</th>)
            }
            if(v === '='){
                return(<th>equal to</th>)
            }
            if(v === '><'){
                return(<th>between</th>)
            }
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
                                {value(this.state.conditionValue)}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
        }
        else return null
}}
export default Table;
