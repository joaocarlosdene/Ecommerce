

import { FormEvent, useState } from "react";
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";

import { Auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {

    const [Email, SetEmail] = useState("")
    const [Password, SetPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e:FormEvent){
        e.preventDefault()

       if (Email === '' || Password === ''){
        alert('Preencha todos os campos')
        return;
       }

       signInWithEmailAndPassword(Auth, Email, Password)
        .then(() => {
            console.log('Logado com sucesso')
            navigate("/dashboard", {replace: true})
        })
       .catch((error) => {
            console.log("Erro ao fazer o login")
            console.log(error)
       })

    }

  return (
    
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center">
          <label className="mr-1 font-bold uppercase">Sign in to your account</label>
         
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500"></p>
        </div>
        <form onSubmit={handleSubmit}>
        <Input
        placeholder="Email"
        type="email"
        value={Email}
        onChange={(e) => SetEmail(e.target.value)}
        autoComplete="username"
        required
        />
        <Input
        placeholder="Password"
        type="password"
        value={Password}
        autoComplete="new-password"
        required
        onChange={(e) => SetPassword(e.target.value)}
        />
      
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase font-bold rounded text-s tracking-wider w-full"
            type="submit"
          >
            Login
          </button>
        </div>
       
        
        </form>
      </div>
    </section>
  );
};

