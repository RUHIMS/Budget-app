//console.log("101");
import { createStore} from 'redux';

const incrementCount =(payload={}) =>{
    return {
        type:'INCREMENT',
        incrementBy: typeof payload.incrementBy=== 'number'?incrementBy:1
    }
        
    
}

const reducer = ((state={count:0},action)=>{
    switch (action.type)
    {
        case 'INCREMENT' :
            
               return {
                   count:state.count+action.incrementBy
               }
        case 'DECREMENT':
               return {
                   count:state.count-1
               }
        case 'RESET' :
              return {
                  count:0
              }
        default:
        return{
            state
        }
    }
})
const store= createStore(reducer )

//increment the count
store.dispatch({
    type:'INCREMENT',
    incrementBy:5
})

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch({
    type:'INCREMENT'
})
store.dispatch({
    type:'DECREMENT'
})
store.dispatch({
    type:'RESET'
})

store.subscribe(()=>{
    console.log(store.getState()
    )
}
    )


const book ={
    title:'Ego is enemy',
    author:'RJ',
    publisher:{
        name:'Shetty Publications'
    }
}

const {name:pubName='SelfPublished'}=book.publisher;
console.log('${pubName}');

const item=['Coffee(hot)','Rs35','Rs45'];
const [medium,,price]=item;
console.log('A medium ${medium} costs ${price}' );


