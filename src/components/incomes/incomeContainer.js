import React from "react";
import IncomeInput from "./incomeInput";
import Incomes from "./incomes";

const incomeContainer = (props) => {
    return(
        <div>
            <IncomeInput />
            <Incomes />
        </div>
    )
}
export default incomeContainer;