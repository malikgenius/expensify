import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import uuid from 'uuid';


class ExpenseListFilters extends Component {
    state = {
        calenderFocused: null
    };
    
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
      };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
      }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" type="text" placeholder="search expense" value={this.props.filters.text} onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value))
                        }}/> 
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                    if( e.target.value === 'date') {
                                        this.props.dispatch(sortByDate())
                                    } else if (e.target.value === 'amount')
                                        this.props.dispatch(sortByAmount())
                                }
                        }>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                            
                        </select>
                    </div>
                <div className="input-group__item">
                <DateRangePicker
                        startDateId={uuid()}
                        endDateId={uuid()}
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                />
                </div>
                </div>
            </div>
        )
    }
    }
    



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
    
}
export default connect(mapStateToProps)(ExpenseListFilters);
