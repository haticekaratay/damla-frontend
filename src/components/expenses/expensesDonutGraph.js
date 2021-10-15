import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Card} from "react-bootstrap";

const ExpensesDonutGraph = (props) =>{
  console.log("donut props", props.expenses)
  const newObj = {}
  props.expenses.forEach((expense)=> {
    if(expense["name"]){
        newObj[`${expense["name"]}`] = expense.amount
    }})
    console.log(newObj)
    console.log(Object.keys(newObj))
    console.log(Object.values(newObj))


    const dataDoughnut = {
     
        labels: Object.keys(newObj),
        datasets: [
          {
         
            data: Object.values(newObj),
            backgroundColor: ["#03A9F4", "#00BCD4", "#009688", "#4CAF50","#CDDC39", "#4D5360","#3F51B5","#1976D2","#D32F2F"],
            hoverBackgroundColor: [
              "#4FC3F7",
              "#4DD0E1",
              "#4DB6AC",
              "#81C784",
              "#DCE775",
              "#646463",
              "#7986CB",
              "#2196F3",
              "#F44336"

            ]
          }
        ]
    }
      return (
        <Card style={{ width: '18rem' }}>
          <h3 className="mt-5">Doughnut chart</h3>
          <Doughnut data={dataDoughnut} options={{ responsive: true }}  />
        </Card>
        );
}
export default ExpensesDonutGraph;