import {createStore,combineReducers} from 'redux';
import uuid from 'uuid'; 
require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-proposal-object-rest-spread"]
  });


const addExpense = (
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}) =>(

    {
        type:ADD_EXPENSE,
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt

        }
    }
)

const removeExpense = ({id} = {}) =>(
    { 
        type:REMOVE_EXPENSE,
        id
    }
   
)

const editExpense = ({id,updates}={}) =>(
{
    type: EDIT_EXPENSE,
    id,
    updates
}
    

)


const setTextFilter =(text='') =>(
    {
         type:'SET_TEXT_FILTER' ,
         text
    }
)
    
const sortbyAmount =()=>(
    {
        type: 'SORT_BY_AMOUNT',

    }
)

const sortbyDate = () =>(
    {
        type: 'SORT_BY_DATE'
    }
)

const setStartDate = (startDate= undefined ) =>(
    {
       type : 'SET_START_DATE',
       startDate

    }
)

const setEndDate = (endDate=undefined)=> (
    {
        type: 'SET_END_DATE',
        endDate
    }
)


const expenseReducerdefaultstate=[];

const expenseReducer = (state = expenseReducerdefaultstate,action) =>{

    switch (action.type) {
        case 'ADD_EXPENSE' :
         return  [...state,action.expense];
        
         case 'REMOVE_EXPENSE' :
         return state.filter(({id})=>{
             return id!==action.id;
         })

         case 'EDIT_EXPENSE' :
         return state.map((expense)=>{
             if(expense.id === action.id)
             {
               return {
                ...expense,
                ...action.updates
                
               }
            }
             else {
                 return expense;
             }

         })
          

        default: 
        return state;
    }
}


const filtersReducerdefaultstate={
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

};

const filtersReducer = (state= filtersReducerdefaultstate,action) =>{
    switch (action.type){

        case 'SET_TEXT_FILTER' :
        return {
            ...state,
            text:action.text
        }

        case 'SORT_BY_AMOUNT' :
        return {
            ...state,
            sortBy:'amount'
        }

        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SET_START_DATE' :
        return {
            ...state,
            startDate:action.startDate

        }

        case 'SET_END_DATE':
        return {
            ...state,
            endDate:action.endDate
        }
        default: 
        return state;
    }

}

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{

    return expenses.filter((expense)=>{

        const startDateMatch;
        const endDateMatch;
        const textMatch;

        startDateMatch = typeof startDate === undefined || expense.createdAt >= expense.startDate;
        endDateMatch = typeof endDate === undefined || expense.createdAt <= expense.endDate;
        textMatch = expense.description.toLowerCase().includes(text.toLoweCase( ));

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if (sortBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1 :-1;
        }

        if (sortBy === 'amount')
        {
            return a.amount < b.amount ? 1 : -1;
        }
         

    });

}

const store= createStore(
    combineReducers(
        {
            expenses: expenseReducer,
            filters:filtersReducer
        }
    )
);

store.subscribe(()=>{
    const state=store.getState();
    const getVisibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(getVisibleExpenses);
}
)

const exp1=store.dispatch(addExpense({description:'Rent',Amount:'Rs 4000',createdAt:1000}));
const exp2=store.dispatch(addExpense({description:'coffee',amount:'Rs 15'}));

store.dispatch(removeExpense({id:exp2.expense.id}));
store.dispatch(editExpense({id:exp1.expense.id,Amount:'Rs 20'}));

store.dispatch(setTextFilter('rent'));

store.dispatch(sortbyAmount());
store.dispatch(sortbyDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(130));
store.dispatch(setEndDate());





const demoState={
    expenses:[{
        id:'123',
        description:'Rent for the month of Jan',
        note:'rent paid',
        amount: 12000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined

    }



}