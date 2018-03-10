import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  // console.log(props);
  return (
    <div>
      <AddExpenseForm 
        expense={props.expense}
        onFormSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id,expense))
          props.history.push('/')
        }}
      />
      <button onClick={() => {
            props.dispatch(startRemoveExpense({id:props.expense.id}))
            props.history.push('/')
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
