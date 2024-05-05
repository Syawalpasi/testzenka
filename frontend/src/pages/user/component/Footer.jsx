import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <div className=' border-bottom'>
        </div>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="1" xl="4" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-0" />
                <img
              src="src/assets/zenka.png"
              width="45%"
              className="d-inline-block align-left"
            />
              </h6>
              <p>
              Sebuah agensi kreatif yang bergerak di bidang photographer, editing dan graphic 
          designer yang ingin menjadi lebih lagi di dunia kreasi digital.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="1" xl="1" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Layanan</h6>
              <p>
                <a>
                Desain Grafis
                </a>
              </p>
              <p>
                <a >
                Foto Grafis
                </a>
              </p>
              <p>
                <a>
                  Video Grafis
                </a>
              </p>
            </MDBCol>

            <MDBCol md="5" lg="5" xl="3" className='mx-auto mb-1'>
              <h6 className='text-uppercase fw-bold mb-4'>Alamat</h6>
              <p>
                <a  style={{ textDecoration: 'none' }} href='https://maps.app.goo.gl/NNzTWZtU8iMG7nwe7' className='text-reset'>
                Jl. Sunggal, Kompleks Green Mediterrania No 4/5, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="5" xl="3" className='mx-auto mb-md-0 mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontak</h6>
              <p>
                <a>
                <MDBCol md={{ span: 5, offset: 2 }}>
  <a href="https://wa.me/6289503301719/?text=tanya%20sekarang" style={{ textDecoration: 'none' , color: 'grey'}}>
    <img src="src/assets/wa.png" width="12%" alt="WhatsApp Logo" />
    0812-2823-2121
  </a>
</MDBCol>

                </a>
              </p>
              <p>
                <a >
                <MDBCol md={{ span: 5, offset: 2 }}>
  <a href="https://www.instagram.com/zenka.folks/" style={{ textDecoration: 'none' , color: 'grey'}}>
    <img src="src/assets/ig.png" width="12%" alt="Instagram Logo" />
    zenka.folks
  </a>
</MDBCol>

                </a>
              </p>
              <p>
                <a>
                <a href="https://www.behance.net/zenkafolks?fbclid=PAZXh0bgNhZW0CMTEAAaayHAPDESql7lmLsLFxZX2KMIXTwnIVsDRmVumzwgu-88YJ4BET4HkbQ44_aem_Aaa7z180oTPMtNGTTSpw8Fecdg9sA-FgMAtpJsQRL-akeWLMFgrFirXIapwER9RdVL_oD_ZTD_juozKug-gN1hoD" style={{ textDecoration: 'none' , color: 'grey' }}>
  <img src="src/assets/behance.png" width="12%" alt="Behance Logo" />
  zenkafolks
</a>

                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright- 
        <a className='text-reset fw-bold' href='' style={{ textDecoration: 'none'  }}>
           Zenka Folks
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
