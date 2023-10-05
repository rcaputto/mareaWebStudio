import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import NavBarNewLink from '../Components/NavBarNewLink';
import FooterWithLogo from './FooterWithLogo';
import '../assets/Styles/Formulario.css'
import Input from '../Components/Input';


export default function Formulario() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {
        console.log('REGISTRO', data)
    }

    return (
        <>
            <NavBarNewLink />
            <div className='encabezado'>
                <h1>Contactanos</h1>
            </div>
            <article className='formulario'>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <did className='camposForm'>
                        <Input type="text"
                            label='Nombre'
                            placeholder="Ingrese su nombre" {...register("nombre", { required: true })}
                            errors={errors} name="nombre"
                        />

                        <Input
                            type="text"
                            label='Email'
                            placeholder="Ingrese su Email" {...register("email", { required: true })}
                            errors={errors} name='email' />

                    </did>

                    <div className='camposForm'>
                        <Input
                            type="nombre"
                            label='Teléfono'
                            placeholder="Ingrese su nro. de teféfono" {...register("telefono", { required: true })}
                            errors={errors} name='telefono' />

                        <Input
                            type="text"
                            label='Asunto'
                            placeholder="Asunto" {...register("asunto", { required: true })}
                            errors={errors} name='asunto' />
                    </div>

                    <textarea
                        placeholder='Como podemos ayudarte?'
                        id='areaComentarios'
                        {...register}
                    />

                    <div className='submit'>
                        <Button variant="primary" type="submit" >Enviar</Button>

                    </div>
                </Form>
            </article>
            <FooterWithLogo />
        </>
    );
}