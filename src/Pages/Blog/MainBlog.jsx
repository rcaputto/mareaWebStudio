import BlogData from '../../assets/Data/BlogData';
import NavBarNewLink from '../../Components/NavBarNewLink';
import BlogCard from '../../Components/BlogCard';
import { Row } from 'react-bootstrap';


function MainBlog() {
  return (
    <>
    <NavBarNewLink/>
    <Row xs = {1} sm ={2} md ={3} lg={4}>
    {BlogData?.map((data)=>(
        <BlogCard
          key = {data.id}
          id = {data.id}
          imagen = {data.imagen}
          titulo = {data.titulo}
          texto = {data.texto}
        />
        ))}
        </Row>
    </>
  );
}

export default MainBlog;