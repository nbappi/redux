// Products
const { createStore, applyMiddleware } = require("redux")
const thunk = require("redux-thunk").default;

const axios = require('axios');

const URL = "https://jsonplaceholder.typicode.com/todos";

// Constant 
const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST"
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED"

// state
const initProducts = {
    products : [],
    isLoading : false,
    error : null
}

//Actions

const getProductsRequest = () => {
    return {
        type : GET_PRODUCTS_REQUEST
    }
}

const getProductsSuccess = (products) => {
    return {
        type : GET_PRODUCTS_SUCCESS,
        payload : products
    }
}

const getProductsFailed = (error) => {
    return {
        type : GET_PRODUCTS_FAILED,
        payload : error
    }
}

// Reducers
const productReducer = ( state = initProducts, action ) => {

    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products : action.payload,
                isLoading : false
            }

        case GET_PRODUCTS_FAILED:
            return {
               ...state,
               error : action.payload,
               isLoading: false
            }
        default:
            return state
    }
}

const getFetchData = () => {
    return ( dispatch ) => {
        dispatch(getProductsFailed());
         axios.get(URL)
              .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
    }
}

// store
const store = createStore(productReducer, applyMiddleware(thunk));

// Store subscribe
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch
store.dispatch(getFetchData());