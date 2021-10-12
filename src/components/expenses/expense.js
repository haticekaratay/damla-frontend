import React from "react";
import { Bar } from 'react-chartjs-2';

const Expense = (props) => {
//    debugger
    return(
        <div style={{height:"500px", width:"400px"}}>
            <li>Expense: {props.expense.name}------{props.expense.amount}---{props.expense.budget}</li>
            <Bar  data={{
                labels: [props.expense.name],
                datasets: [
                    {
                     data: [props.expense.amount, props.expense.budget],
                     backgroundColor: ['rgba(75,192,192,1)', 'rgba(245, 48, 150, 0.8)']
                    }
                ]
            }} 
            options={{
                animation: {
                    duration: 2000},
                borderRadius: 10,
                plugins: {
                    legend: {
                      position: 'top',
                    }
                },
                barThickness: 20,
                indexAxis: 'y',
                responsive: true,
                title: {text: `${props.expense.name}`},
                scales: {
                    xaxes: [
                        {
                            gridLines: {
                                display: false
                            }
                        }
                    ],
                    yaxes: [
                        {
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                },
    
            }}
                // width={100}
                // height={50}
            />
        </div>
    )
}

export default Expense;