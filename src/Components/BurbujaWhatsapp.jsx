import whatsapp from '../assets/Images/whatsapp.png';
import '../assets/Styles/BurbujaWhatsapp.css'

export default function BurbujaWhatsapp (){
    return(
        <>
    <div className="social-bar-whatsapp">
    <a href=" https://wa.me/+543416165987" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="Facebook" />
    </a>
    
  </div>
    </>
    )
}