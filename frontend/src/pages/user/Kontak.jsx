import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Footer from './component/Footer';
import Header from './component/Header';
import Map from './component/map';
import Contact from './component/Email';
import Card from 'react-bootstrap/Card';

function Kontak() {
  // Inisialisasi AOS saat komponen dimuat
  React.useEffect(() => {
    AOS.init({
      duration: 2000, // Durasi animasi dalam milidetik
      once: false, // Apakah animasi hanya akan diputar sekali
      delay: 0, // Penundaan animasi dalam milidetik
      easing: 'ease', // Jenis easing
    });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row style={{ textAlign: 'center' }}>
          <h1>Kontak Kami</h1>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <p >Pelanggan bisa menghubungi PT Zenka Folks dari akun media sosial di bawah ini.</p>
        </Row>
        <Row data-aos="fade-up">
  <div className="d-grid gap-4">
    <Button
      style={{
        width: '100%',
        height: '100%',
        background: '#05A302',
        borderRadius: 15,
        position: 'relative',
        transition: 'background-color 0.3s ease',
      }}
      href="https://wa.me/6289503301719/?text=tanya sekarang"
      size="lg"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency/48/whatsapp.png"
            alt="whatsapp"
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
            }}
          />
        </div>
        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <h3>0821-1100-8090</h3>
        </div>
      </div>
    </Button>

    <Button
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #923DB6 0%, #C63C8E 100%)',
        borderRadius: 15,
        position: 'relative',
        transition: 'background-color 0.3s ease',
      }}
      size="lg"
      href="https://www.instagram.com/zenka.folks?igsh=NjQwdWR2MDBsbmk="
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
            alt="instagram-new"
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
            }}
          />
        </div>
        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <h3>zenka.folks</h3>
        </div>
      </div>
    </Button>

    <Button
      style={{
        width: '100%',
        height: '100%',
        background: '#0C6AD5',
        borderRadius: 15,
        position: 'relative',
        transition: 'background-color 0.3s ease',
      }}
      size="lg"
      href="https://www.behance.net/zenkafolks?fbclid=PAZXh0bgNhZW0CMTEAAaayHAPDESql7lmLsLFxZX2KMIXTwnIVsDRmVumzwgu-88YJ4BET4HkbQ44_aem_Aaa7z180oTPMtNGTTSpw8Fecdg9sA-FgMAtpJsQRL-akeWLMFgrFirXIapwER9RdVL_oD_ZTD_juozKug-gN1hoD"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/3d-fluency/188/behance.png"
            alt="behance"
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
            }}
          />
        </div>
        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <h3>zenkafolks</h3>
        </div>
      </div>
    </Button>
  </div>
</Row>


        <Container style={{ marginTop: '12vh' }} data-aos="fade-right">
  <Row style={{ textAlign: 'center' }}></Row>
  <Row>
    <Card style={{ border: '1px solid orange', borderRadius: 25, boxShadow: '0px 2px 4px rgba(255, 165, 0, 1)' }}>
      <h2 style={{ textAlign: 'center' }}>Alamat Kami</h2>
      <p style={{ marginBottom: '7vh', textAlign: 'center' }}>Pelanggan bisa mengunjungi Alamat dari Zenka Folks.</p>
      <Map />
    </Card>
  </Row>
</Container>

<Container style={{ marginTop: '8vh' }} data-aos="fade-left">
  <Card style={{ border: '1px solid orange', borderRadius: 25, boxShadow: '0px 2px 4px rgba(255, 165, 0, 1)' }}>
    <h2 style={{ textAlign: 'center' }}>Email Kami</h2>
    <a   style={{ marginBottom: '7vh', textAlign: 'center' }}>Pelanggan bisa menghubungi PT Zenka Folks Melalui.</a>
    <Contact />
    <br></br>
  </Card>
</Container>

        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
}

export default Kontak;
