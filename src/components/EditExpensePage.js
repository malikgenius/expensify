import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom'
import AddExpenseForm from './AddExpenseForm';
// eslint-disable-next-line
import SingleExpensePage from './SingleExpensePage'
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
// eslint-disable-next-line
import { startRemoveExpense} from '../actions/expenses';
import ModalDeleteExpense from './ModalDeleteExpense';

class EditExpensePage extends React.Component  {
  
  constructor(props) {
    super(props)
    console.log(props)
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
      <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            <div className="list-item">
              <div >
                <h3 className="list-item__title">
                            {this.props.expense.description}
                </h3>
                <span className="list-item__sub-title">
                    {`${moment(this.props.expense.createdAt).format('Do MMMM YYYY hh:mma')}`}
                </span>
                <div>
                  <p className="list-item__data">
                        {numeral(this.props.expense.amount).format('$0,0.00')}
                  </p>
                </div>
                <div>
                  <p>
                  {this.props.expense.note}
                  </p>
                  
                </div>
              </div>
              <div>
                    {/* avatar file name display on screen */}
                    
                    {this.props.expense.imageURL ? <a href={this.props.expense.imageURL} target="_blank"><img alt="" className="uploaded-image"  src={this.props.expense.imageURL}/></a>: ''}
                </div>
                
            </div>
            <Link className="list-item" to={`/editform/${this.props.expense.id}`}>
            <button className="button">Edit Expense</button>
            </Link>
            
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
