import React from "react";
const Income = (props) => {
   return(
       <div>
           <li key={props.key}>{props.income.name}--{props.income.amount}</li>
       </div>
   )
}
export default Income;