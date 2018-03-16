import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
         <h1>Edit Expense </h1>
        </div>
        </div>
        <div className="content-container">
          <AddExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
              props.dispatch(startEditExpense(props.expense.id,expense))
              props.history.push('/dashboard')
            }}
          />
          <button className="button button--secondary" 
                onClick={() => {
                props.dispatch(startRemoveExpense({id:props.expense.id}))
                props.history.push('/dashboard')
            }}>remove expense</button>
        </div>
    </div>
    
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return(expense.id === props.match.params.id)
      
    })
  }
}



export default connect(mapStateToProps)(EditExpensePage);
