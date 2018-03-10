import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { database } from './firebase/firebase';
import { addExpense } from './actions/expenses';


class App extends Component {

    componentDidMount = () => {
        database.ref('expenses').on('value', (snapshot) => {
            // addExpense(snapshot.val())
            console.log(snapshot.val())
        })
    }
    render() {
        return (
                <AppRouter />
        )
    }
};

export default App;