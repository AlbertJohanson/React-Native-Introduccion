import { useState } from "react"
import { useForm } from "../Hooks/useForm"

export const Formularios = () => {

    const { onChange, email, password, state } = useForm({
        email: "aj.dev.gt@gmail.com",
        password: "1234"
    });

  return (
    <>
        <h1>Formularios</h1>
        <input type={'text'} className='form-control' placeholder="Email" value={email} onChange={({target}) => onChange(target.value, "email")}/>
        <input type={'text'} className='form-control mt-2 mb-2' placeholder="Password" value={password} onChange={({target}) => onChange(target.value, "password")}/>


        <code>
            <pre>
                {JSON.stringify(state)}
            </pre>
        </code>

    </>
  )
}
