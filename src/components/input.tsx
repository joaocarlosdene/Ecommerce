import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export default function Input(props: InputProps) {
  return (
    <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
          type="text"
          {...props}
        />
  )
}
