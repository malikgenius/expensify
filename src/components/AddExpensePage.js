import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import AddExpenseForm from './AddExpenseForm';


export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
        <div className="content-container">
         <h1>Add Expense </h1>
        </div>
        </div>
        <div className="content-container">
          <AddExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
        
      </div>
    )
  }
}
  
const mapDispatchToProps = (dispatch, getState) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})


export default connect(undefined, mapDispatchToProps)(AddExpensePage);
