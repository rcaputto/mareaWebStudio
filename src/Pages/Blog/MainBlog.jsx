import BlogData from '../../assets/Data/BlogData';
import NavBarNewLink from '../../Components/NavBarNewLink';
import BlogCard from '../../Components/BlogCard';
import FooterWithLogo from '../FooterWithLogo';
import { Row } from 'react-bootstrap';
import '../../assets/Styles/Blog.css';
import { useEffect } from 'react';



function MainBlog() {
  useEffect(() => {
    window.scrollTo(0, 0); // Esto desplazará la página hacia arriba cuando se cargue esta página
  }, []);
  return (
    <>
      <NavBarNewLink />
      <div className="blog-page">
        <div className="blogContent">
          <h1> Nuestro Blog</h1>
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4}>
        {BlogData?.map((data) => (
          <BlogCard
            key={data.id}
            id={data.id}
            imagen={data.imagen}
            titulo={data.titulo}
            texto={data.texto}
          />
        ))}
      </Row>
      <FooterWithLogo/>
    </>
  );
}

export default MainBlog;