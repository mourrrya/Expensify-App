import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./style/style.scss";
import "./firebase/firebase";
import AppRouter, { history } from "./routers/router";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const target = document.getElementById("app");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>...loading</p>, target);

let hasRendered = false;
const render = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, target);
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log("log in");
    store.dispatch(startSetExpenses()).then(() => {
      render();
      if(history.location.pathname==='/'){
        history.push('/expense')
      }
      });
    
    
  } else {
    // No user is signed in.
    render();
    history.push("/");
    console.log("log out");
  }
});
