import { createContext, useState } from "react";

const Context = createContext()

function Provider({children}){
    const [mode, setMode] = useState(true)
    return(
        <Context.Provider value={{mode, setMode}}>{children}</Context.Provider>
    )
}

export {Context, Provider};