// Create state 

const { createStore } = require("redux");

const increment = "INCREMENT"
const decrement = "DECREMENT"
const reset = "RESET"

const initialState = {
    counter : 0
}

const incrementAction = () => {
    return {
        type : increment
    }
}

const decrementAction = () => {
    return {
        type : decrement
    }
}

const resetAction = () => {
    return {
        type : reset
    }
}

const counterReducer = ( state = initialState , action) =>{
    switch (action.type) {
        case increment :
            
        return {
            ...state,
            counter : state.counter + 1
        }
        case decrement :
           return {
            ...state,
            counter : state.counter - 1 
           }
        case reset :

        return {
            ...state,
            counter : 0
        }
    
        default:
           state;
    }
}


const store = createStore(counterReducer);

store.subscribe(() => {
    console.log( store. getState());
});

store.dispatch(incrementAction());

store.dispatch(incrementAction());
store.dispatch(resetAction());