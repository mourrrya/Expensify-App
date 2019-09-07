import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

export default class AddEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        }
        
    }
    isDescription = (e) => {
        const thisDescription = e.target.value
        this.setState(() => ({
            description: thisDescription
        }))
    }
    isAmount = (e) => {
        const thisNote = e.target.value
        if (!thisNote || thisNote.match(/^\d{1,}(\.\d{0,4})?$/)) {
            this.setState(() => ({
                amount: thisNote
            }))
        }
    }
    isNotes = (e) => {
        const thisNotes = e.target.value
        this.setState(() => ({
            note: thisNotes
        }))
    }
    onDateChange = (date) => {
        if (date)
            this.setState(() => ({ createdAt: date }))
    }
    onFocusChange = ({ focused }) => this.setState({ focused })

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'please provide description and amount' }))
        }
        else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })

        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}> 
                    <input type='text' placeholder='description' value={this.state.description} onChange={this.isDescription} />
                    <input type='text' value={this.state.amount} placeholder='amount' onChange={this.isAmount} />
                    <textarea placeholder='add a note for your expense (optional)' value={this.state.note} onChange={this.isNotes} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    <button>Add</button>
                </form>

            </div>
        )
    }
}