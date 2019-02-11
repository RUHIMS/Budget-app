import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const now=moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props)
  {
      super(props);
      this.state={
          description:props.expense ? props.expense.description : '',
          note:props.expense ? props.expense.note : '',
          amount:props.expense ? props.expense.amount.toString() : '',
          createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
          calenderFocused: false,
          errorMsg:""

      }
  }

  onDescriptionChange=(e)=>{
     const description = e.target.value;
     this.setState(()=>({description}))
  }

  onNoteChange=(e)=>{
      const note=e.target.value;
      this.setState(()=>(
          {note}
      ))
  }

  onFocusChange = ({focused}) => {
   this.setState(()=>({
       calenderFocused: focused
   })) 
  }
  onDateChange = (createdAt)=>{
      if(createdAt)
      {
        this.setState(()=> ({
            createdAt
        }))
      }
   
  }
      
  

  
    
  
  onAmountChange = (e) =>{
      const amount=e.target.value;
      if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      {
        this.setState(()=>({
            amount
        }))
      }
     
  }
  
  onSubmit= (e) =>{
     e.preventDefault();
     if(!this.state.amount || !this.state.description)
     {
        this.setState(()=>({
           errorMsg: "Please fill in description and amount"
        }))
     } 
     else
     {
        this.setState(()=>({
            errorMsg:""
            
        }))
        this.props.onSubmit({
            description:this.state.description,
            amount:parseFloat(this.state.amount,10),
            createdAt: this.state.createdAt.valueOf( ),
            note:this.state.note
        })
     }
  }

    render(){
        return(
            <div>
                {this.state.errorMsg && <p>{this.state.errorMsg }</p>}
               <form onSubmit={this.onSubmit}>
                   <input type="text" 
                    placeholder="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                   />
                    <input type="text"
                    placeholder="Amount" 
                value={this.state.amount}
                onChange={this.onAmountChange}/>
                    <br />

                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.calenderFocused} 
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1} 
                        isOutsideRange={()=> false}
  
/>
                    <textarea 
                    placeholder="Note for the Expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                    
               </form>
            </div>
        )
    }
}