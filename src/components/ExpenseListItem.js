import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch,description, createdAt, amount, note, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>
            {description}
        </h3>
        </Link>
        <p>
            {`amount: ${amount}RO`}  {`Date: ${createdAt}`}
        </p>
        <p>{note}</p>
        
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//     expenses: state.expenses
//     }}

export default ExpenseListItem;