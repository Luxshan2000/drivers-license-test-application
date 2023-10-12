import { createContext, useContext, useState } from "react";


//create auth context
const AuthContext = createContext()

//custom hook for use context
export const useAuthContext = () => useContext(AuthContext)

//create provider
export  const AuthProvider = ({children})=>{
    //Todo
    const [auth,setAuth] = useState("")

    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}