import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Selectexpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h2>Expense List</h2>
            {props.expenses.map((expense) => {
                // console.log(expense)
                return (
                    
                    <ExpenseListItem key={expense.id}{...expense}/>
                )
                
            })}
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