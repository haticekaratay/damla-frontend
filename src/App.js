import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import { connect } from 'react-redux'
import {autoLogin} from "./actions/userActions"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import BudgetsContainer from "./components/budgets/budgetsContainer"
import Footer from './components/Footer';
import NotFound from './components/NotFound';

class App extends React.Component{
 

  render(){
    //  this.props.autoLogin()
    console.log("current user:",this.props.currentUser)
    console.log("is logged in?:",this.props.loggedIn)
      return (
        <>
        <div className="app-custom font-custom content-container">
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

const mapStateToProps = (state) =>{
    return {
      currentUser : state.users.currentUser,
      loggedIn : state.users.loggedIn
    }

}
export default connect(mapStateToProps,{autoLogin})(App);
