import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
