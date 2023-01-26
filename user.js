const { createStore } = require('redux');

const ADD_USER = "ADD_USER"
const userState = {
    user : [ 'Bappi' ],
    count : 1,
    roll : ''
}

const addUser = (name, roll = 10 ) => {
    return {
        type : ADD_USER,
        payload : name,
        roll : roll
    }
}

const userReducer = ( state = userState , action) => {

    switch (action.type) {
        case ADD_USER: 
            return {
                user : [ ...state.user, action.payload ],
                count : state.count + 1,
                roll : action.roll
            }
    
        default:
            state
    }
}

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addUser("Nuruzzaman"));
store.dispatch(addUser("Rahim", 30));