import '../assets/Styles/Presentacion.css';
import { useEffect } from 'react';

export default function Presentacion() {

  useEffect(() => {
    window.scrollTo(0, 0); // Esto desplazará la página hacia arriba cuando se cargue esta página
  }, []);

  return (

    <>
    <div className="marketing-page" id='inicio'>
    <div className="content">
      <h1>Desarrollo web y Marketing digital</h1>
      <p>Páginas web personalizadas, Tienda en Línea, Landing Page, Optimización SEO, Diseño Web y más. </p>
      <button><a className='masInfo' href='http://wa.me/+543416165987' target='blank'>¡Más información!</a> </button>
    </div>
  </div>
    </>
  )
}