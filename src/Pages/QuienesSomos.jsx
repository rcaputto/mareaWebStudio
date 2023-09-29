import CardImageTextData from "../assets/Data/CardImageTexData";
import imagen from '../assets/Images/ecommerce3.jpg';
import imagen5 from '../assets/Images/tablet YLentes.jpg';
import imagen6 from '../assets/Images/FondoNosotros.jpg'
import logo from '../assets/Images/logoGrande.png'
import '../assets/Styles/QuienesSomos.css'
import FooterWithLogo from './FooterWithLogo';


export default function QuienesSomos() {

    return (
        <>
            
            <div className='nosotrosImagenTranslucida'>
                <img src={imagen6} alt='img' />
                <div className='logoNosotros'>
                <img  src={logo}  alt='img'/>
                </div>
            </div>
            <div className='introCopy'>
                <h3>
                En <span className='marca'>Marea Web Studio</span>  nos dedicamos a facilitar la inserción y el crecimiento en el mundo digital para emprendedores y empresas. 
                </h3>
            </div>
            <div className='nosotros'>
                <h3 className='copyNosotros'>{CardImageTextData[1].texto}</h3>
                <img className='imagenNosotros' src={imagen5} alt='img' />
            </div>
            <div className='nosotros'>
                <img className='imagenNosotros' src={imagen} alt='img' />
                <h3 className='copyNosotros'>{CardImageTextData[2].texto}</h3>
            </div>
            <div className='nosotros'>
                <h3 className='copyNosotros'>{CardImageTextData[3].texto}</h3>

            </div>
            <FooterWithLogo />
        </>
    )
}