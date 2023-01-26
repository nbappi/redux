// Create state 

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
