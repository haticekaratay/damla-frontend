import React from "react"
import { Bar } from "react-chartjs-2"
import {Card} from "react-bootstrap"
import { connect } from "react-redux"

const ExpensesDonutGraph = (props) =>{
    const incomeTotal = () => {
      let incomeTotal = 0;
      props.incomes.forEach((incomeObj) => {
          incomeTotal += incomeObj.amount 
    })
      return incomeTotal
    }

    const expenseTotal = () => {
      let expenseTotal = 0;
      props.expenses.forEach((expenseObj) => {
          expenseTotal += expenseObj.amount 
    })
      return expenseTotal
    }

    const barGraphData = {
      
      labels: ["Total Income($)", "Total Spent($)", "Currently($)"],
      datasets: [
        {
          label: "",
          data: [incomeTotal(), expenseTotal(), incomeTotal()-expenseTotal()],
          backgroundColor: ["#03A9F4", "#00BCD4", "#009688"],
          hoverBackgroundColor: [
            "#4FC3F7",
            "#4DD0E1",
            "#4DB6AC",
          ]
        }
      ]
    }

    return (
      <Card className="expence-container">
        Income vs Expenses
        <Bar data={barGraphData} options={{ responsive: true }}  />
      </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses.expenses,
        incomes : state.incomes.incomes
    }
}
export default connect(mapStateToProps)(ExpensesDonutGraph);