import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Container from "./components/Container";

//1- function that returns state
const rootReducers = combineReducers({ mentalHealth, physicalHealth });

function mentalHealth(state = 100, action) {
  switch (action.type) {
    case "WATCH_THE_NEWS":
      return state - 20;
    case "WIN_THE_LOTTERY":
      return state + 30;
    default:
      return state;
  }
}

function physicalHealth(state = 100, action) {
  switch (action.type) {
    case "SLIP_ON_BANANA_PEEL":
      return state - 20;
    case "WIN_THE_LOTTERY":
      return state + action.howMuch;
    default:
      return state;
  }
}

//2- lets actually make that state object
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//3- we need to wrap a container in a provider

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector("#target")
);
