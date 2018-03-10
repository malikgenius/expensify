import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './App';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense,startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
const store = configureStore();

export default class App extends Component {
    componentDidMount() {
        store.dispatch(startSetExpenses()).then(() => {
            console.log(store.getState())
        })
    }
    render(props) {
        return(
            <Provider store={store}>
            <div>
                <AppRouter />
                {/* <p>this is HOC:  {props.info}</p> */}
            </div>
            </Provider>
        )
    }
};
// only shows admin warning 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isActive && <WrappedComponent {...props}/>  }
            </div>
    );
}
const Admininfo = withAdminWarning(App)

// if is admin show the component if not show the login message
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin ? (<WrappedComponent {...props}/>) : (<p>please login to see this page</p>)}
        </div>
    )
}
const AuthInfo = requireAuthentication(App)
// export default App;

// store.dispatch(addExpense({ description: 'Water bill' }));
// store.dispatch(addExpense({ description: 'Gas bill' }));
// store.dispatch(setTextFilter('gas'));

// const highPrice = store.dispatch(addExpense({ amount: 300, description: 'high Price', createdAt: '23-Feb-2018'}));
// store.dispatch(addExpense({ amount: 500, description: 'Very High Price .. My GOSH', }));
// store.dispatch(editExpense(highPrice.expense.id, { description: 'low Price '}))
// store.dispatch(sortByAmount());
// store.dispatch(setTextFilter('lo'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('High'));
// }, 2000)

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// ReactDOM.render(<Admininfo isActive={true} info={"this is me"}/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(<App/>, document.getElementById('root'));
    
// });

// ReactDOM.render(<AuthInfo isAdmin={true} info={"from PROPS through HOC"}/>, document.getElementById('root'));

