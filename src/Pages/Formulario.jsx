import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-hook-form';
import NavBarNewLink from '../Components/NavBarNewLink';
import FooterWithLogo from './FooterWithLogo';
import '../assets/Styles/Formulario.css'

export default function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <NavBarNewLink/>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='nombreEmail'>
    
      <input type="text" placeholder="Ingrese su nombre" {...register("nombre", {required: true})} />
      
      <input type="text" placeholder="email" {...register("email", {required: true})} />
      
      </div>
      <div className='telefonoAsunto'>
      <input type="tel" placeholder="telefono" {...register("telefono", {required: true})} />
      <input type="text" placeholder="asunto" {...register("asunto", {required: true})} />
      </div>
      <div className='textArea'>
      <textarea {...register} />
      </div>
      
        <div className='submit'>
      <input type="submit" />
      </div>
    </form>
    <FooterWithLogo/>
    </>
  );
}