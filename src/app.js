import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import "normalize.css/normalize.css";
import "./style/style.scss";
import './firebase/firebase'
import AppRouter from './routers/appRouter'
import configureStore from './store/configureStore'

const store = configureStore()


const target = document.getElementById("app");
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, target);