import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFiletrs from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashbordPage= () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFiletrs />
        <ConnectedExpenseList />
        
    </div>

);

export default ExpenseDashbordPage;