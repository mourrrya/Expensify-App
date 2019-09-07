import React from 'react'
import AddEditForm from './addEditForm'
import { connect } from 'react-redux'
import { editExpense } from '../actions/expenses'

const Edit = (props) =>
    <div>
        <AddEditForm
            expense={props.expenses}
            onSubmit={(update) => {
                props.dispatch((editExpense(props.expenses.id, update)))
                props.history.push('/')
            }} />
    </div>;

const mapStateToProps = (state, props) => ({
    expenses: state.expenses.find((expense) => {
        return expense.id === props.match.params.id
    })

})
export default connect(mapStateToProps)(Edit)