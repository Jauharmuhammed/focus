'use client';

import { createContext, useContext, useState } from "react";

const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
    const [primaryVolume, setPrimaryVolume] = useState(1);

    return (
        <AppContext.Provider value={{ primaryVolume, setPrimaryVolume }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);