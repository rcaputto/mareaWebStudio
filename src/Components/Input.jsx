import Form from 'react-bootstrap/Form';
import '../assets/Styles/Formulario.css'

export default function Input({label, type='text', name, register, placeholder, errors, children}){
    return(
        <Form.Group  
                className='form'
                controlId={name}
                >
            <Form.Label id='nombreInput'>{label}</Form.Label>
            <Form.Control 
                placeholder = {placeholder}
                type={type} {...register} />
                {errors && errors[name]?.type === 'required' && 
                <Form.Text style={{color:'red'}}>El campo es obligatorio</Form.Text>}
                {children && children}
        </Form.Group>
    )
}