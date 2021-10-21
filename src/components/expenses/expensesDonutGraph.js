import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Card } from "react-bootstrap"

const ExpensesDonutGraph = (props) =>{

    const newObj = {}
    props.expenses.forEach((expense)=> {
      if(expense["name"]){
          newObj[`${expense["name"]}`] = expense.amount
      }})

    const dataDoughnut = {
     
        labels: Object.keys(newObj),
        datasets: [{
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
          }]
    }
      return (
        <Card className="expence-container">
          <Doughnut data={dataDoughnut} options={{ responsive: true }} />
        </Card>
      )
}
export default ExpensesDonutGraph;