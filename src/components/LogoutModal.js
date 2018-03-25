import React from 'react';
import Modal from 'react-modal';
// import { startLogOut } from '../actions/auth';

const LogoutModal = ({ showModal, closeModal, userDisplayName, userPHOTO, userEmail, dispatch, history, startLogOut }) => {
    // console.log(`userEmail: ${userEmail}`)
    return (
        <Modal
            isOpen={showModal}
            ariaHideApp={false}
            onRequestClose={closeModal}
            contentLabel="User Modal"
            closeTimeoutMS={200}
            className="modal"
    >
            <div>
                <h1>{userDisplayName}</h1>
                <p>{userEmail}</p>
                <button className="button__modal" 
                    onClick={startLogOut}
                    // history.push('/dashboard')
                    >Logout
                </button>
                <button onClick={closeModal} className="button">
                Cancel
            </button>
            </div>
        </Modal>
    )
    
}

export default LogoutModal;