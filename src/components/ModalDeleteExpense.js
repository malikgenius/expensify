import React from 'react';
import Modal from 'react-modal';
import { startRemoveExpense } from '../actions/expenses';


const ModalDeleteExpense = ({showModal, onModalClose, dispatch, history, expense}) => {
    // console.log(props)
    return (
        <Modal
            isOpen={showModal}
            onRequestClose={onModalClose}
            contentLabel="Expense-Delete"
            ariaHideApp={false}
            closeTimeoutMS={200}
            className="modal"
        >  
            <p className="modal-text">Do you want to Delete</p>
            <button className="button__modal" 
                onClick={() => {
                // we could pass it as props and configure function in EditExpensePage but we did it here, other
                // is used in header logout system .. please check it there .. 
                dispatch(startRemoveExpense({id:expense.id}))
                history.push('/dashboard')
                }}>YES
            </button>
            <button onClick={onModalClose} className="button">
                NO
            </button>
        </Modal>
        
    )

};

export default ModalDeleteExpense;
