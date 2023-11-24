import { ReactNode, useEffect, useState } from "react"
import {Navigate} from "react-router-dom"

import { Auth } from "./firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"

interface ProtectionProps{
    children: ReactNode
}



export function RouteProtection({children}: ProtectionProps): any {

    const [loading, setloading] = useState(true)
    const [signed, setSigned] = useState(false)
    useEffect(() =>{
        const unsub = onAuthStateChanged(Auth, (user) =>{
            if(user){
                const userData =  {
                    uid: user?.uid,
                    email: user?.email
                }
                localStorage.setItem("@ecommerce-dash", JSON.stringify(userData))
                setloading(false);
                setSigned(true);
            } else {
                setloading(false);
                setSigned(false);
            }
        })
    },[])

    if(loading){
        <h1>Carregando</h1>
    }
    if(!signed){
        return <Navigate to='/login'/>
    }

  return children
  
}
