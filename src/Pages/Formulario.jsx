import {useEffect, useRef} from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import NavBarNewLink from '../Components/NavBarNewLink';
import FooterWithLogo from './FooterWithLogo';
import '../assets/Styles/Formulario.css'
import Input from '../Components/Input';
import emailjs from '@emailjs/browser';


export default function Formulario() {
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const sendEmail = (data) => {
        console.log('REGISTRO', data)
        

        emailjs.sendForm('service_m9knr4m', 'template_knvfww2', form.current, 'R3GEQvLr2Jan6cebU')
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    useEffect(() => {
        window.scrollTo(0, 0); // Esto desplazará la página hacia arriba cuando se cargue esta página
      }, []);

    return (
        <>
            <NavBarNewLink />
            <div className='encabezado'>
                <h1>Contactanos</h1>
                </div>
                <div className='space'/>
            <article className='fullPage' >
                <Form ref = {form} onSubmit={sendEmail} className='formulario'>
                    <Input 
                    type='text' label='Nombre' placeholder='Ingrese su nombre' register= {{...register("nombre", { required: true })}}
                    errors = {errors} name= 'nombre' 
                    />

                    <Input
                    type='text' label='Email' placeholder='Ingrese su nombre' register= {{...register("email", { required: true })}}
                    errors = {errors} name= 'email' 
                    />

                    <Input
                    type='text' label='Teléfono' placeholder='Ingrese su teléfono' register= {{...register("telefono", { required: true })}}
                    errors = {errors} name= 'telefono' 
                    />

                    <Input
                    type='text' label='Asunto' placeholder='Asunto' register= {{...register("asunto", { required: true })}}
                    errors = {errors} name= 'asunto' 
                    />
                   
                    <Form.Group className="mb-3" controlId="comentarios">
                    <Form.Label id='nombreInput'>Comentarios</Form.Label>
                    <Form.Control 
                    name = 'mensaje'
                    as="textarea" 
                    rows={3}
                    {...register} />
                    </Form.Group>

                    <div className='submit'>
                    <input type="submit" value="Send" />

                    </div>
                </Form>
            </article>
            <FooterWithLogo/>
        </>
    );
}