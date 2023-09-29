import NavBar from '../Components/NavBar';
import Presentacion from './Presentacion';
import Copy1 from './Copy1';
import Copy2 from './Copy2';
import CopyServices from './CopyServices';
import LastWorks from './LastWorks';
import Opiniones from './Opiniones';
import ProcesoTrabajo from './ProcesoTrabajo';
import Contacto from './Contacto';
import Footer from './FooterWithLogo';
import Planes from './Planes';




export default function Principal() {

    return (
        <>
            <NavBar />
            <Presentacion />
            <Copy1/>
            <Copy2/>
            <CopyServices/>
            <LastWorks />
            <Opiniones/>
            <ProcesoTrabajo/>
            <Planes/>
            <Contacto/>
            <Footer/>
        </>
    )
}
