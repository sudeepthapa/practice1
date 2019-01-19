import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
const store = configureStore();

store.dispatch(addExpense({description:'Water Bills',amount:4500}));
store.dispatch(addExpense({description:'Gas Bills', createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:444500}));



console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
serviceWorker.unregister();


