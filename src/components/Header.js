import React from 'react';
import { Link } from 'react-router-dom';
import {startLogOut} from '../actions/auth';
import { connect } from 'react-redux';

export const Header = (props) => {
  // console.log(props)
  

  return (
      <header className="header">
        <div className="content-container">
          <div className="header-content">
            <Link to="/dashboard" className="header__title">
              <h1>Expensify</h1>
            </Link>
            {/* <button className="button button--link" onClick={props.startLogOut}>{props.profile}</button> */}
              <img 
                className="user-image"
                src={props.userPHOTO}
                onClick={props.startLogOut}
              />
          </div>
        </div>
      </header>
  )
  
};

const mapStateToProps = (state) => ({
  auth: state.auth.uid,
  userPHOTO: state.auth.userPHOTO,
  userDisplayName: state.auth.userDisplayName,
  userEmail: state.auth.user

  // startLogOut: () => state.dispatch(startLogOut())
});

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})
// const mapStateToProps = (state) => ({

// })
export default connect(mapStateToProps, mapDispatchToProps)(Header)
