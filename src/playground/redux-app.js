import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const demoState = {
    expenses: [{
        id: '',
        description: '',
        note: '',
        amount: '',
        createdAt: ''
    }],

    filters: {
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    }
}


store.subscribe(() => {
    const state = store.getState()
    const getvisibleExpense = visibleExpense(state.expenses, state.filters)
    console.log(getvisibleExpense)
})


const expenseOne = store.dispatch(addExpense({ createdAt:230,description: 'rent', note: 'asjsddfbasj', amount: 500 }))
const expenseTwo = store.dispatch(addExpense({ createdAt:30,description: 'bought a car', amount: 2000000 }))
const expenseThree = store.dispatch(addExpense({ createdAt:565630,description: 'buy a home', amount: 5000000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseThree.expense.id, { amount: 2500000000 }))

store.dispatch(sortByAmount())

store.dispatch(sortByDate())
store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter('bought'))


// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(1233))







