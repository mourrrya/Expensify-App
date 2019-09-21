import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AddExpense from "../components/addExpensePage";
import Edit from "../components/editExpensePage";
import ExpenseListPage from "../components/expenseListPage";
import Login from "../components/loginPage";
import PageNotFound from "../components/pageNotFound";
import PrivateRoute from "../routers/privateRoute";
import PublicRoute from "../routers/publicRoute";

export const history = createBrowserHistory();
export default () => {
  const routes = (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/expense" component={ExpenseListPage} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
  return routes;
};
