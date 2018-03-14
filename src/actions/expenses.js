// import uuid from 'uuid';
import database from '../firebase/firebase';
// import moment from 'moment';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

// middleWare redux Thunk 

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }
    database.ref(`users/${uid}/expenses`).push(expense)
      .then((ref) => dispatch(addExpense({
        id: ref.key,
        ...expense
      })) );
  }
}

// REMOVE_EXPENSE we can use (id) if we dont want object .. 
export const removeExpense = ({id = {}}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({id}) => {
  return(dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).child(id).remove()
      .then(() => {
        dispatch(removeExpense({id}))
      })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return(dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
      .then(() => {
        dispatch(editExpense(id, updates))
      })
  }
}



// SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return(dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapShot) => {
      expenses.push({
        id: childSnapShot.key,
        ...childSnapShot.val()
      });
    })
    dispatch(setExpenses(expenses))
  
  })
  }
};

