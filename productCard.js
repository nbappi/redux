// Products
const { createStore } = require("redux")

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

const initProducts = {
    products : ["sugar", 'salt'],
    count : 2
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
            state
    }
}

const store = createStore(productReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Water"));

// Cards