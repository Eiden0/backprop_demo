import React, {Component} from 'react';
import "./base.css"
import Adder from "../Adder/adder";
import Table from "../Table/table";

class Base extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedOption : null,
            plusOption : null
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleOnClickPlus = this.handleOnClickPlus.bind(this)
    }

    handleOptionChange(selectedOption){
        this.setState({selectedOption});
    }

    handleOnClickPlus(option){
        this.setState({plusOption : option},() => {console.log(this.state.plusOption)})
    }

    render() {
       const selectedOption = this.state.selectedOption;
       return(
               <div className="base_table">
                   <h2 className="header">New Linear Policy</h2>
                   <div className="table">
                        <table style={{width : "60%"}}>
                            <tr>
                                <th>Metric</th>
                                <th>Condition</th>
                                <th>Value</th>
                              </tr>
                        </table>
                   </div>
                   <Table option={this.state.plusOption}/>
                   <Adder selectedOption={selectedOption}
                          handleOptionChange={this.handleOptionChange}
                          handleOnClickPlus={this.handleOnClickPlus}
                   />
               </div>
       )
   }
}
export default Base;