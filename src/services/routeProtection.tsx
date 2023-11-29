import { ReactNode, useContext } from "react"
import {Navigate} from "react-router-dom"
import { authContext } from "../context api/authContext"



interface ProtectionProps{
    children: ReactNode
}



export function RouteProtection({children}: ProtectionProps): any {

    const {signed, loadingAuth} = useContext(authContext)
    
    
    if(loadingAuth){
        <h1>Carregando</h1>
    }
    if(!signed){
        return <Navigate to='/login'/>
    }

  return children
  
}
