import React, {createContext} from 'react';

// app context
const AppContext = createContext();

// componente wrap app; l'oggetto children sarà App o il componente che ha bisogno di accedere ad un determinato provider
function AppProvider({children}) {
    return (
        <AppContext.Provider 
            value='app context'
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};