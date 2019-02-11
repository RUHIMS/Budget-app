import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter,sortbyDate,sortbyAmount,setStartDate,setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            calendarFocused: null
        }
    }

    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    }

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>(
            {calendarFocused}
            )
        )

    }
render(){
    return(
        <div>
        <input type="text" value={this.props.filter.text} onChange={(e)=>{
           this.props.dispatch(setTextFilter(e.target.value))
        

        }} />
        <select
           value={this.props.filter.sortBy}
           onChange={(e)=>{ 
               if(e.target.value==='date')
               {
                  this.props.dispatch(sortbyDate())
               }
               if(e.target.value === 'amount')
               {
                   this.props.dispatch(sortbyAmount())
               }

           }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        
        </select>
        <DateRangePicker 
        startDate={this.props.filter.startDate}
        endDate={this.props.filter.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=>false}/>
        
    </div>
    )
}

}

const mapStateToProps = (state) =>{
 return {
     filter: state.filters
 }
}

export default connect(mapStateToProps)(ExpenseListFilters);