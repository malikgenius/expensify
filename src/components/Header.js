import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {startLogOut} from '../actions/auth';
import { connect } from 'react-redux';
import LogoutModal from './LogoutModal';

export class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        showModal: undefined,
      }
    }

    onModalOpen = () => {
      this.setState({ showModal: true})
    }

    onModalClose = () => {
      this.setState({ showModal: undefined})
    }

    // we can create mapDispatchToProps in Modal and we can pass it as prop and configure it here like below.
    startLogOut = () => {
      startLogOut()
    }
    render() {    
      return (
          <header className="header">
            <div className="content-container">
              <div className="header-content">
                <Link to="/dashboard" className="header__title">
                  <h1>Expensify</h1>
                </Link>
                {/* <button className="button button--link" onClick={props.startLogOut}>{props.profile}</button> */}
                  <img alt=""
                    className="user-image"
                    src={this.props.userPHOTO}
                    onClick={this.onModalOpen}
                    // onClick={props.startLogOut}
                  />
                  <LogoutModal
                    {...this.props} 
                    showModal={this.state.showModal}
                    closeModal={this.onModalClose}
                    startLogOut={this.startLogOut}
                  />
              </div>
              
            </div>
          </header>
      )
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth.uid,
  userPHOTO: state.auth.userPHOTO,
  userDisplayName: state.auth.userDisplayName,
  userEmail: state.auth.userEmail,
  user: state.auth.user

  // startLogOut: () => state.dispatch(startLogOut())
});

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})
// const mapStateToProps = (state) => ({

// })
export default connect(mapStateToProps, mapDispatchToProps)(Header)
