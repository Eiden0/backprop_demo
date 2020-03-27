import React, {Component} from 'react';
import "./adder.css"
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class adder extends Component{

    render() {
        return(
            <div>
                <Select options={options}/>
            </div>
        )
    }
}

export default adder;