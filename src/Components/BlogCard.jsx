import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function BlogCard({ id, titulo, texto, imagen }) {


    return (
        <Container>
            <Card >
                <Card.Img src={imagen} style={{ height: '65vh', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Button variant="primary"><Link to={`/blog/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Leer</Link></Button>
                </Card.Body>
            </Card>



        </Container>
    )


}