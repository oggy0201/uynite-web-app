import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore ,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import allReducer from './allReducer';

const store = createStore (allReducer, composeWithDevTools (
    applyMiddleware (thunk),
   
  ));


  export default store;