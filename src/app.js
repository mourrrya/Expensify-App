import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./style/style.scss";
import AppRouter from './routers/appRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()


const target = document.getElementById("app");
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, target);