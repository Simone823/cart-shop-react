

// reducer, params state action
const reducer = (state, action) => {

    // console.log(action)

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
            products: action.payload.map((product) => {
                    return {
                        ...product,
                        quantity: 1
                    }
                }),
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

    // if action type increment quantity
    if(action.type === 'INCREMENT_QUANTITY') {
        return {
            ...state,
            products: state.products.map((product) => {
                // if product id === action paylod
                if(product._id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity++
                    }
                }

                // return product
                return {
                    ...product
                }
            })
        }
    }

    // if action type decrement quantity
    if(action.type === 'DECREMENT_QUANTITY') {
        return {
            ...state,
            products: state.products.map((product) => {
                if(product._id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1 === 0 ? 1 : product.quantity - 1
                    }
                }

                return {
                    ...product
                }
            })
        }
    }

    // return state
    return state;
}

export default reducer