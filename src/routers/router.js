import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AddExpense from "../components/addExpensePage";
import Edit from "../components/editExpensePage";
import ExpenseListPage from "../components/expenseListPage";
import Header from "../components/header";
import Help from "../components/help";
import Login from "../components/loginPage";
import PageNotFound from "../components/pageNotFound";

export const history = createBrowserHistory();
export default () => {
  const routes = (
    <Router history={history}>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/expense" component={ExpenseListPage} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
  return routes;
};
