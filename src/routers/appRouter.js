import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header'
import ExpenseListPage from '../components/expenseListPage'
import AddExpense from '../components/addExpensePage'
import Edit from '../components/editExpensePage'
import Help from '../components/help'
import PageNotFound from '../components/pageNotFound'

export default () => {
  const routes = (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/" component={ExpenseListPage} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
  return routes
}
