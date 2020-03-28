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
    }

    render() {
        if(this.props.option !== null) {
            return (
                <div className="table">
                    <table style={{width: "60%"}}>
                        <tr>
                            <th>{this.props.option}</th>
                            <th><Select options={options}/></th>
                            <th>Value</th>
                        </tr>
                    </table>
                </div>
            )
        }
        else return null;
    }
}
export default Table;