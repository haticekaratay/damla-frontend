import './App.css';
import React from "react";
import {Route} from "react-router-dom"
import { connect } from 'react-redux'
import {autoLogin} from "./actions/userActions"

import SignUp from "./components/SignUp";
import Home from "./components/Home"
import Login from "./components/Login";
import IncomeContainer from "./components/incomes/incomeContainer";

class App extends React.Component{
  render(){
    this.props.autoLogin()
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mybudget" component={IncomeContainer} />
      </div>
    );
  }
}
export default connect(null,{autoLogin})(App);
