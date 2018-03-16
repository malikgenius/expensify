import React from 'react';
import { Link } from 'react-router-dom';
import {startLogOut} from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({startLogOut}) => {

  return (
      <header className="header">
        <div className="content-container">
          <div className="header-content">
            <Link to="/dashboard" className="header__title">
              <h1>Expensify</h1>
            </Link>
            <button className="button button--link" onClick={startLogOut}>Logout</button>
          </div>
        </div>
      </header>
  )
  
};

const mapDispatchtoProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});
export default connect(undefined, mapDispatchtoProps)(Header)
