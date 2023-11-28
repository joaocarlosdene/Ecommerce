
import {RegisterOptions, UseFormRegister} from "react-hook-form"

interface InputProps {
  type: string;
  placeholder:string;
  name: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

export default function Input({type, placeholder, name, register, error, rules}: InputProps) {
  return (
      <div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          id={name}
        />
      {error && <p>{error}</p>}
      </div>
     )
  }
