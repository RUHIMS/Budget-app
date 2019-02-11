  import React from 'react';
  import { connect } from 'react-redux';
  import ExpenseListItem from './ExpenseListItem';
  import getVisibleExpenses from '../selectors/expenses';

    const ExpenseList =(props) =>(
    <div>
    <h2>Expense List</h2> 
    {props.expense.map((expense)=>{
       return <ExpenseListItem key={expense.id} {...expense}/>

    })
}
    
    
</div>
  )

  /*const ConnectedExpenseList = connect((state)=>{
      return {
          expense: state.expenses
      }
  })(ExpenseList)
     
  export default ConnectedExpenseList;*/

  const mapStateToProps = (state) =>{
      return {
          expense:getVisibleExpenses(state.expenses,state.filters)
         
      }
  }

  export default connect(mapStateToProps)(ExpenseList);
 