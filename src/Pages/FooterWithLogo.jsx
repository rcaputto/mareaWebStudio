import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import instagram from '../assets/Images/instagram.png';
import facebook from '../assets/Images/facebook.png';
import whatsapp from '../assets/Images/icons8-whatsapp.gif';
import {Link} from 'react-router-dom'

export default function FooterWithLogo() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Síguenos en nuestras redes:</span>
        </div>

        <div>
          <a href='http://instagram.com/mareawebstudio' target='blank' className='me-4 text-reset'>
           <img src={instagram} />
          </a>
          <a href='https://m.facebook.com/profile.php?id=61552337481255' target='blank' className='me-4 text-reset'>
          <img src={facebook} />
          </a>
          <a href='' className='me-4 text-reset'>
          <Link to='http://wa.me/+543416165987' target='blank'><img src={whatsapp} /></Link> 
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Marea Web Studio
              </h6>
              <p style={{textAlign:'justify'}}>
              Navegando hacia el éxito digital. Tu aliado en desarrollo web y marketing digital para emprendedores.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Servicios</h6>
              <p>
                <a href='#servicios' className='text-reset' style={{textDecoration: 'none'}}>
                  Desarrollo Web
                </a>
              </p>
              <p>
                <a href='#servicios' className='text-reset' style={{textDecoration: 'none'}}>
                  Marketing Digital
                </a>
              </p>
              <p>
                <a href='#servicios' className='text-reset' style={{textDecoration: 'none'}}>
                  E-Commerce
                </a>
              </p>
              <p>
                <a href='#servicios' className='text-reset' style={{textDecoration: 'none'}}>
                  Landing Page
                </a>
              </p>
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                mareawebstudio@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +543416165987
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +543413278739
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          Marea Web Studio
        </a>
      </div>
    </MDBFooter>
  );
}


