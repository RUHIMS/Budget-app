import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configurestore';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
 import './firebase/firebase';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.scss';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});




serviceWorker.unregister();
/*store.dispatch(addExpense({description:'Water bill', amount:'450'}));
store.dispatch(addExpense({description:'Electricity bill',amount:'500',createdAt: '10000'}));
store.dispatch(addExpense({description:'Garbage bill',amount:'40',createdAt:'100'}));
store.dispatch(addExpense({description:'House Rent',amount:'1300'}));


store.dispatch(setTextFilter('bill'));

const state=store.getState();
const VisibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(VisibleExpenses);*/

