import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {

  return (
    <div>
      <AddExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id,expense))
          props.history.push('/dashboard')
        }}
      />
      <button onClick={() => {
            props.dispatch(startRemoveExpense({id:props.expense.id}))
            props.history.push('/dashboard')
        }}>remove expense</button>
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
