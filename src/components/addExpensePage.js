import React from 'react'
import { connect } from 'react-redux'
import AddEditForm from './addEditForm'
import { startAddExpense } from '../actions/expenses'
class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <AddEditForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpense)