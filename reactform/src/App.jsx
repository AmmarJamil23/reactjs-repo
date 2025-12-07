import React from 'react'
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit }= useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form className= "tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>

      <input {...register("email", {
        required: true,
      })} type="text" placeholder='Email' />
      <input {...register("password", {
        required: true,
      })} type="password" placeholder='Password' />
      <button type='submit'>Submit</button>

    </form>
  )
}

export default App