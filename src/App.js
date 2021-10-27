import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import BudgetsContainer from "./components/budgets/budgetsContainer"
import Footer from './components/Footer';
import NotFound from './components/NotFound';

class App extends React.Component{

  render(){
      return (
        <>
        <div className="app-custom">
          <Navbar />
            <Switch>
              <Route exact path="/budgets" component={(routeInfo)=> <BudgetsContainer routeInfo={routeInfo} />} />
              <Route exact path="/" component={(routeInfo)=> <Login routeInfo={routeInfo} />} />
              <Route exact path="/signup" component={(routeInfo)=> <SignUp routeInfo={routeInfo} />} />
              <Route component= {NotFound} />
            </Switch>
        </div>
        <Footer />
        </>
      );
  }

}
export default (App);
