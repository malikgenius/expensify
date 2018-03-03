import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import AddExpenseForm from './AddExpenseForm';


const AddExpensePage = (props) => (
  <div>
    <h2>Add Expense </h2>
    <AddExpenseForm 
      onFormSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      
    }}/>
  </div>
);


export default connect()(AddExpensePage);
