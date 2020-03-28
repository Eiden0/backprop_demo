import React, {Component} from 'react';
import './table.css'

class Table extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="table">
                <table style={{width : "60%"}}>
                    <tr>
                        <th>{this.props.option}</th>
                        {/*<th>Condition</th>*/}
                        {/*<th>Value</th>*/}
                    </tr>
                </table>
            </div>
        )
    }
}
export default Table;