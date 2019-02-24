import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expensesCount,expensesTotal}) =>{
    console.log(expensesTotal);
      const wexpense= expensesCount===1 || expensesCount===0? "expense" : "expenses";
      const nexpensesTotal= numeral(expensesTotal).format('$ #,##0.00');
    return (
        <div>
            <h2>The total amount spent on {expensesCount} {wexpense} is {nexpensesTotal}</h2>
        </div>
    )

}

const mapStateToProps = (state) =>{
     const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
        

    }
}
export default connect(mapStateToProps)(ExpenseSummary);
