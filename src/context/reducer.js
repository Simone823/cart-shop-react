

// reducer, params state action
const reducer = (state, action) => {

    // console.log(state)

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


    // return state
    return state;
}

export default reducer