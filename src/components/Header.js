import React from 'react';
import { NavLink } from 'react-router-dom';
import {startLogOut} from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({startLogOut}) => {

  return (
      <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={startLogOut}>log out</button>
      </header>
  )
  
};

const mapDispatchtoProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});
export default connect(undefined, mapDispatchtoProps)(Header)
