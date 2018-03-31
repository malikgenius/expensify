import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import './numeralLocale';

const SingleExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <h3 className="list-item__title">
                    {props.description}
                </h3>
                <span className="list-item__sub-title">
                    {`${moment(props.createdAt).format('Do MMMM YYYY hh:mma')}`}
                    {numeral(props.amount).format('$0,0.00')}
                </span>
            </div>
            <h3 className="list-item__data">
                
            </h3>
            <div>
                <p>{props.note}</p>
            </div>
        </div>
    ) 
};

export default SingleExpensePage;