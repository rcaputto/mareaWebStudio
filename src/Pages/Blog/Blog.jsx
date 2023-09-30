import { Container, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FindBlogPostById from '../../assets/Servicios/FindBlogPostById';
import NavBarNewLink from '../../Components/NavBarNewLink';
import "../../assets/Styles/Blog.css"
import FooterWithLogo from '../FooterWithLogo'



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
            
            <Card>
                <img className='mainImg' src={blog.imagen} />
                    <Card.Body>
                        <h1 className='blogTitulo'>
                            {blog.titulo}
                        </h1>
                        <Card.Text className='blogTexto'>
                            {blog.texto}
                        </Card.Text>
                        <Card.Text className='subtitulo'>{blog.subtitulo1}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo1}
                        </Card.Text>
                        <Card.Text className='subtitulo'>{blog.subtitulo2}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo2}
                        </Card.Text>
                        <Card.Text className='subtitulo'>{blog.subtitulo3}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo3}
                        </Card.Text>
                        <img className='mainImg secondImg' src={blog.imagen2} />
                        <Card.Text className='subtitulo'>{blog.subtitulo4}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo4}
                        </Card.Text>
                        <Card.Text className='subtitulo'>{blog.subtitulo5}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo5}
                        </Card.Text>
                        <Card.Text className='subtitulo'>{blog.subtitulo6}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo6}
                        </Card.Text>
                        <Card.Text className='subtitulo'>{blog.subtitulo7}</Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.parrafo7}
                        </Card.Text>
                        <Card.Text className='blogTexto'>
                            {blog.cierre}
                        </Card.Text>
                    </Card.Body>
            </Card>
            
            <FooterWithLogo/>
                <article className='article'></article>
            </>
        )
    }

}