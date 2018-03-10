import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import './numeralLocale';

const ExpenseListItem = ({ description, createdAt, amount, note, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>
            {description}
        </h3>
        </Link>
        <p>
            {numeral(amount).format('$0,0.00')}
            -
            {`Date: ${moment(createdAt).format('Do MMMM YYYY hh:mma')}`}
        </p>
        <p>{note}</p>
        
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//     expenses: state.expenses
//     }}

export default ExpenseListItem;