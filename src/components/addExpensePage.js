import React from 'react'
import { connect } from 'react-redux'
import AddEditForm from './addEditForm'
import { addExpense } from '../actions/expenses'

const AddExpense = (props) => (
    <div>
        <h1>Add Expense</h1>
        <AddEditForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }} />
    </div>
)

export default connect()(AddExpense)