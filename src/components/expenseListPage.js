import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import ExpenseListFilter from "./expenseListFilter";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <ExpenseListFilter />
    <h2> Expense List </h2>
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);
const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);
