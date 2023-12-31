import {useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Alert, Button } from 'react-bootstrap';
import NavBarNewLink from '../Components/NavBarNewLink';
import FooterWithLogo from './FooterWithLogo';
import '../assets/Styles/Formulario.css'

import emailjs from 'emailjs-com';


export default function Formulario() {
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({ mode: 'onChange' })

    const [isEmailSent, setIsEmailSent] = useState (false)
    const [emailUserName, setEmailUserName] = useState ()

    const sendEmail = (data) => {
        console.log('REGISTRO', data)
        console.log('EMAIL', form.current)
        setEmailUserName (data.nombre)

        emailjs.sendForm('service_m9knr4m', 'template_p0eawcv', form.current, 'R3GEQvLr2Jan6cebU')
            .then((result) => {
                console.log(result.text);
                setIsEmailSent(true);
                resetFields()
            }, (error) => {
                console.log(error.text);
            });
    }

    const resetFields = () => {
        
        setValue('nombre', '');
        setValue('telefono', '');
        setValue('email', '');
        setValue('mensaje', '');

         
    };;

    useEffect(() => {
        window.scrollTo(0, 0); // Esto desplazará la página hacia arriba cuando se cargue esta página
    }, []);

    return (
        <>
            <NavBarNewLink />
            <div className='encabezado'>
                <h1>Contactanos</h1>
            </div>
            
            <div className='space' />
            <article className='fullPage' >
            {isEmailSent && (
                <Alert variant = "success">
                    "Hola {emailUserName}, hemos recibido tu consulta. Te contactaremos a la brevedad. Muchas gracias!"
                </Alert>
            )}
                <h2>Envíanos tu consulta</h2>
                <Form ref={form} onSubmit={handleSubmit(sendEmail)} className='formulario'>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('nombre', { required: true })}
                            name="nombre"
                        />
                        {errors.nombre && <Form.Text className="text-danger">Este campo es obligatorio.</Form.Text>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('telefono', { required: true })}
                            name="telefono"
                        />
                        {errors.telefono && <Form.Text className="text-danger">Este campo es obligatorio.</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            {...register('email', { required: true })}
                            name="email"
                        />
                        {errors.email && <Form.Text className="text-danger">Este campo es obligatorio.</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comentarios">
                        <Form.Label id='nombreInput'>Mensaje</Form.Label>
                        <Form.Control
                            name='mensaje'
                            as="textarea"
                            rows={3}
                            {...register('mensaje', { required: true })}
                            defaultValue="" />
                    </Form.Group>

                    <div className='submit'>
                        <Button type="submit" value="Send" >Enviar</Button>

                    </div>
                </Form>
            </article>
            <FooterWithLogo />
        </>
    );
}