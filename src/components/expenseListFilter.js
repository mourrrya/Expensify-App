import React from 'react'
import uuid from 'uuid'

import { DateRangePicker } from 'react-dates'


import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {

    state={
        focusedInput:null
    }
    onDateChange=({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange=focusedInput => this.setState({ focusedInput })
    render() {
        return (
            <div>
                <input type='text'  value={this.props.Textfilter} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate())
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option>date</option>
                    <option>amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                    startDateId={uuid()}
                    endDate={this.props.endDate} // momentPropTypes.momentObj or null,
                    endDateId={uuid()}
                    onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={(()=>false)}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        textfilter: state.filters.text,
        startDate:state.filters.startDate,
        endDate:state.filters.endDate
    }
}


export default connect(mapStateToProps)(ExpenseListFilter)