import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Auth } from '../../services/firebaseConnection';
import { useEffect } from 'react';


import Input from "../../components/input";


import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from 'react-router-dom';



const schema = z.object({
  email:z.string().email("Insira um email valido").min(1),
  password:z.string().min(1,"Esse campo nao pode ficar em branco")
})

type FormData = z.infer<typeof schema>

export function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })
  
  //LOG OUT
  const navigate = useNavigate()
   useEffect(()=>{
    async function handleLogout(){
      await signOut(Auth)
    }
    handleLogout()

   },[])



    async function onSubmit(data:FormData){
    signInWithEmailAndPassword(Auth,data.email, data.password)
    .then(() =>{
      console.log("Logado com sucesso")
      navigate("/dashboard", {replace:true})

    })
    .catch(err =>{
      console.log("Erro ao logar")
      console.log(err)
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        placeholder="Email"
        type="email"
        name="email"
        error={errors.email?.message}
        register={register}
        />
        <Input
        placeholder="Password"
        type="password"
        name="password"
        error={errors.password?.message}
        register={register}
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

