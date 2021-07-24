import React, { useContext, useState } from 'react'


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSideBar, setIsSideBar] = useState(false);
    const [isModal, setIsModal] = useState(false);

    return <AppContext.Provider value={{isSideBar, isModal, setIsSideBar, setIsModal}}>
        {children}
    </AppContext.Provider>
}

//Custom Hook(Method 2 for exporting)-
export const useGlobalContext = () => {
    return useContext(AppContext);
}

//Method 1 for exporting-
export { AppProvider, AppContext }