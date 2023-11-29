import { useContext } from "react"
import { authContext } from "../../context api/authContext"
import { Link } from "react-router-dom";

export function Home(){
const {signed, loadingAuth} = useContext(authContext);

    return (
        <>
            <h1>Pagina Home</h1>
            {!loadingAuth && signed && (
                <Link to='/Dashboard' >
                <h1>logado</h1>
                </Link>
            )}
            {!loadingAuth && !signed && (
                <Link to="/login">
                <h1>deslogado</h1>
                </Link>
            )}
        </>
    )
}