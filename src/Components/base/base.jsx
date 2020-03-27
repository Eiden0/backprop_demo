import React, {Component} from 'react';
import "./base.css"
import Adder from "../Adder/adder";
class Base extends Component{

   render() {
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
                   <Adder/>
               </div>
       )
   }
}

export default Base;