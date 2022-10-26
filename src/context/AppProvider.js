import React, {createContext, useReducer, useEffect} from 'react';

// import reducer
import reducer from './reducer';

// import axios
import axios from 'axios';

// app context
const AppContext = createContext();

// initial state reducer
const initialState = {
    products: [],
    isLoading: true,
    isError: false
}

// componente wrap app; l'oggetto children sarà App o il componente che ha bisogno di accedere ad un determinato provider
function AppProvider({children}) {

    // use reducer state dispatch
    const [state, dispatch] = useReducer(reducer, initialState);

    // get products
    const getProducts = () => {      
        
        // dispatch get products start
        dispatch({type: 'GET_PRODUCTS_START'});
        
        // axios get products
        axios.get('https://react--course-api.herokuapp.com/api/v1/data/cart')
        .then((res) => {
            // dispacth get products success
            dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: res.data.data});
        })
        .catch((err) => {
            // dispacth get products success
            dispatch({type: 'GET_PRODUCTS_ERROR'});

            // console warn err
            console.warn(err.message);
        })
    }

    // use effect get products
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <AppContext.Provider 
            value={
                {
                    ...state
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};