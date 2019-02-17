import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configurestore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
 
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.scss';

/*store.dispatch(addExpense({description:'Water bill', amount:'450'}));
store.dispatch(addExpense({description:'Electricity bill',amount:'500',createdAt: '10000'}));
store.dispatch(addExpense({description:'Garbage bill',amount:'40',createdAt:'100'}));
store.dispatch(addExpense({description:'House Rent',amount:'1300'}));


store.dispatch(setTextFilter('bill'));

const state=store.getState();
const VisibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(VisibleExpenses);*/
const store = configureStore();
const jsx=(<Provider store={store}>
<AppRouter />
</Provider>)

ReactDOM.render(jsx, document.getElementById('root'));


serviceWorker.unregister();