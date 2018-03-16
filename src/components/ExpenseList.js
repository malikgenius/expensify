import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Selectexpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Expenses</span>
                    </div>
                ) :
                props.expenses.map((expense) => {
                    // console.log(expense)
                    return (
                        
                        <ExpenseListItem key={expense.id}{...expense}/>
                    )
                    
                })
            }
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: Selectexpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);


// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses.length,
//         filters: state.filters
//     };
// })(ExpenseList)