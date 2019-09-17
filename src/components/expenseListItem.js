import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { startRemoveExpense } from '../actions/expenses'

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {moment(createdAt).format("dddd, MMMM Do YYYY")}</p>
        <button onClick={() => {
            dispatch(startRemoveExpense({ id }));
        }
        }>remove</button>
    </div>
)

export default connect()(ExpenseListItem)


