import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FindBlogPostById from '../../assets/Servicios/FindBlogPostById';
import NavBarNewLink from '../../Components/NavBarNewLink';



export default function BlogCard() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({})
    useEffect(() => {
        const request = async () => {
            try {
                const data = FindBlogPostById(id)
                setBlog(data)
                setLoading(false)
                console.log('DATA', data)
            }
            catch (error) {
                console.log('Ocurrió un error', error)
            }
        }
        request()
    }, [])

    if (loading) {
        return (
            <h3>Cargando...</h3>
        )
    } else {
        return (
            <>
            <NavBarNewLink/>
                <h1>{blog.titulo}</h1>
                <h1>{blog.texto}</h1>
            </>
        )
    }

}