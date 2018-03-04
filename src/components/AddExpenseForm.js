import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const now = moment();
        console.log(now.format('hh:mma'))

export default class AddExpenseForm extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note: '',
            amount:props.expense ? props.expense.amount: '',
            createdAt: moment(),
            focused: false,
            error: ''
    }
    
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        // https://regex101.com/
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
        
    }
    onNoteChanged = (e) => {
        // const note = e.target.value;
        // below is e.persist() .. replacement of const note = e.target.value, but please use const note kind of solution only. 
        e.persist();
        this.setState(() => ({ note: e.target.value }))
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
        
    }
    onFocusChanged = ({focused}) => {
        this.setState(() => ({ focused }))
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please add Description & Amount'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onFormSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                note: this.state.note,
                //DD-MM-YY ddd hh-mma  it doesnt work with filters :( 
                createdAt: this.state.createdAt.format('DD-MMM-YY')
            })
        }
    }

    render() {
        
        return(
            <div>
                {!this.state.description || !this.state.amount ? this.state.error : ''}
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" autoFocus placeholder="description here"
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    />
                    <input type="text" placeholder="amount"
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={((day) => false)}
                    />
                    <br></br>
                    <textarea 
                        placeholder="your details here"
                        onChange={this.onNoteChanged}
                    >
                    </textarea>
                    <br></br>
                    <button>AddExpense</button>
                </form>
            </div>
        )
    }
}  