export default (expenses) =>{
    if(expenses.length === 0)
    {  
        console.log("if part");
        return 0;
    }
     else {
         console.log("els part");
          return expenses.map((expense)=>{
              return expense.amount
          }).reduce((sum,value)=>{
               return sum+value;
               
          },0)
    }

}