import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import "normalize.css/normalize.css";
import "./style/style.scss";
// import './firebase/firebase'
import AppRouter from './routers/router'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
// import {firebase} from './firebase/firebase'

const store = configureStore()

 
const target = document.getElementById("app");
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>...loading</p>, target)

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, target);
})

  //   firebase.auth().onAuthStateChanged((user) =>{
  //   if (user) {
  //     // User is signed in.
  //     console.log('log in')
  //   } else {
  //     // No user is signed in.
  //     console.log('log out')

  //   }
  // });