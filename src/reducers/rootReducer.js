import { combineReducers } from 'redux';
import incomeReducer from "./incomeReducer";
import expenseReducer from "./expenseReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    users: userReducer,
    expenses: expenseReducer,
    incomes: incomeReducer
})

export default rootReducer;
