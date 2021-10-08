import './App.css';
import React from "react";
import {Route} from "react-router-dom"
import SignUp from "./components/SignUp";
import Home from "./components/Home"
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
