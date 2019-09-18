import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AddExpense from "../components/addExpensePage";
import Edit from "../components/editExpensePage";
import ExpenseListPage from "../components/expenseListPage";
import Help from "../components/help";
import Login from "../components/loginPage";
import PageNotFound from "../components/pageNotFound";
import PrivateRoute from "../routers/privateRoute";

export const history = createBrowserHistory();
export default () => {
  const routes = (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <PrivateRoute path="/expense" component={ExpenseListPage} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
  return routes;
};
