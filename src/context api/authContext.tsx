import {ReactNode, createContext, useState, useEffect} from  "react"
import { Auth } from "../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"

interface AuthProviderProps {
    children: ReactNode
}

type AuthContextData = {
    signed:boolean,
    loadingAuth: boolean
}

interface UserProps  {
    uid: string,
    name: string | null,
    email: string | null

}

export const authContext = createContext({} as AuthContextData)

function AuthProvider({children}: AuthProviderProps){

    const[user, setUser] = useState<UserProps | null>(null)
    const [loadingAuth, setLoadingAuth] = useState(true)

    useEffect(() => {

        const unsub = onAuthStateChanged(Auth, (user) =>{
            if(user){
                //tem usuariio logado
                setUser({
                    uid:user.uid,
                    name: user?.displayName,
                    email:user?.email
                })
                setLoadingAuth(false)
            } else {
                //nao tem usuario logado
                setUser(null)
                setLoadingAuth(false)
            }
            return () =>{
                unsub()
            }
        })
    },[])


    return(
        <authContext.Provider value={{signed: !!user, loadingAuth,}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;