import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFiletrs from './ExpenseListFilters';

const ExpenseDashbordPage= () => (
    <div>
        <ExpenseListFiletrs />
        <ConnectedExpenseList />
        
    </div>

);

export default ExpenseDashbordPage;