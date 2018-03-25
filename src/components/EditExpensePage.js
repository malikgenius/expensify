import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
// eslint-disable-next-line
import { startRemoveExpense} from '../actions/expenses';
import ModalDeleteExpense from './ModalDeleteExpense';

class EditExpensePage extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      showModal: undefined,
    }

    this.isModalOpen = () => {
      this.setState({
        showModal: true
      })
    }
    this.onModalClose = () => {
      this.setState(() => ({
        showModal: undefined
      }))
    }
    
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
           <h1>Edit Expense </h1>
          </div>
          </div>
          <div className="content-container">
            <AddExpenseForm 
              expense={this.props.expense}
              onSubmit={(expense) => {
                this.props.dispatch(startEditExpense(this.props.expense.id,expense))
                this.props.history.push('/dashboard')
              }}
            />
            <button className="button button--secondary" 
                onClick={this.isModalOpen}
            >
              remove expense
            </button>
            <ModalDeleteExpense 
              showModal={this.state.showModal}
              onModalClose={this.onModalClose} 
              {...this.props}
            />
          </div>
      </div>
      
    );
  };
  }
  

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return(expense.id === props.match.params.id)
      
    })
  }
}



export default connect(mapStateToProps)(EditExpensePage);
