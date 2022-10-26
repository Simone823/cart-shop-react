

// reducer, params state action
const reducer = (state, action) => {

    // if action type GET PRODUCTS
    if(action.type === 'GET_PRODUCTS_START') {
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    }

    // if action type get products success
    if(action.type === 'GET_PRODUCTS_SUCCESS') {
        return {
            ...state,
            products: action.payload,
            isLoading: false,
            isError: false
        }
    }

    // if action type get products success
    if(action.type === 'GET_PRODUCTS_ERROR') {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }

    // if action type delete product
    if(action.type === 'DELETE_PRODUCT') {
        return {
            ...state,
            products: state.products.filter((product) => product._id !== action.payload)
        }
    }

    // return state
    return state;
}

export default reducer