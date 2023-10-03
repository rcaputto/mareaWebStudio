import CardImageTextData from "../assets/Data/CardImageTexData";
import imagen from '../assets/Images/ecommerce3.jpg';
import imagen5 from '../assets/Images/tablet YLentes.jpg';
import imagen6 from '../assets/Images/FondoNosotros.jpg'
import logo from '../assets/Images/logoGrande.png'
import '../assets/Styles/QuienesSomos.css'
import FooterWithLogo from './FooterWithLogo';
import NavBarNewLink from '../Components/NavBarNewLink';
import { useEffect } from "react";
import quienesSomos from '../assets/Images/quinesSomos.png'
import ButtonContacto from "../Components/ButtonContacto";
import BurbujaWhatsap from "../Components/BurbujaWhatsapp";


export default function QuienesSomos() {

    useEffect(() => {
        window.scrollTo(0, 0); // Esto desplazará la página hacia arriba cuando se cargue esta página
      }, []);

    return (
        <>
           <NavBarNewLink/> 
            <div className='nosotrosImagenTranslucida'>
                <img src={imagen6} alt='img' />
                <div className='logoNosotros'>
                <img  src={logo}  alt='img'/>
                </div>
            </div>
            <BurbujaWhatsap/>
            <div className='introCopy'>
                <h3>
                En <span className='marca'>Marea Web Studio</span>  nos dedicamos a facilitar la inserción y el crecimiento en el mundo digital para emprendedores y empresas. 
                </h3>
            </div>
            <div className='nosotros divisionUs'>
                <h3 className='copyNosotros'>{CardImageTextData[1].texto}</h3>
                <img className='imagenNosotros ' src={quienesSomos} alt='img' />
            </div>
            
            <div className='nosotros'>
                <h3 className='copyNosotros'>{CardImageTextData[3].texto}</h3>
            </div>
            <ButtonContacto/>
            <FooterWithLogo />
        </>
    )
}