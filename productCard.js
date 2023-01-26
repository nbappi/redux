// Products
const { createStore, combineReducers } = require("redux")

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

const GET_CARTS = "GET_CARTS"
const ADD_CART = "ADD_CART"

const initProducts = {
    products : ["sugar", 'salt'],
    count : 2
}

const initCarts = {
    carts : ["sugar"],
    count : 1
}

const getProducts = () => {
    return {
        type : GET_PRODUCTS
    }
}

const addProduct = (name) => {
    return {
        type : ADD_PRODUCT,
        payload : name
    }
}

const getCarts = () => {
    return {
        type : GET_CARTS
    }
}

const addCart = (name) => {
    return {
        type : ADD_CART,
        payload : name
    }
}

const productReducer = ( state = initProducts, action ) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCT:
            return {
                products : [ ...state.products, action.payload ],
                count : state.count + 1
            }
        default:
            return state
    }
}

const cartReducer = ( state = initCarts, action ) => {

    switch (action.type) {
        case GET_CARTS:
            return {
                ...state
            }

        case ADD_CART:
            return {
                carts : [ ...state.carts, action.payload ],
                count : state.count + 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers(
    {
        productR : productReducer,
        cartR : cartReducer
    }
);

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Water"));

// Cards

store.dispatch(getCarts());
store.dispatch(addCart('pen'));