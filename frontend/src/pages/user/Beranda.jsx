import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import { CardTitle } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import './component/style.css';
import Buttonall from './component/Buttonall';
import { Link } from 'react-router-dom';

function Beranda() {
  // Inisialisasi AOS
  AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: false, // Apakah animasi hanya akan diputar sekali
    delay: 0, // Penundaan animasi dalam milidetik
    easing: 'ease', // Jenis easing
});

  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div style = {{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
  <Container style={{marginTop: '-8vh' }}>
    <Row className="align-items-center" style={{ backgroundColor: 'white', textAlign: 'justify', padding: '2rem' }}>
      <Col md={6} data-aos="fade-right" style={{ padding: '1rem' }}>
        <p>
          <a>
            <img
              data-aos="flip-up"
              src="/src/assets/zenka.png"
              width="300px"
              className="d-inline-block align-center"
              alt="Zenka Logo"
              style={{ maxWidth: '100%' }} // Tambahkan style maxWidth untuk responsivitas
            />
          </a>
        </p>
        <p>
          Sebuah <b>agensi kreatif</b> yang bergerak di bidang fotografi,
          editing, dan desain grafis. Kami menawarkan promosi <b>harga murah</b> dan <b>desain yang bagus</b> untuk semua proyek kreatif Anda.
        </p>

        <p className="text-center text-md-start"> {/* Tambahkan kelas untuk memusatkan tombol di mode ponsel */}
          <a onClick={() => navigate('/kontak')} data-aos="zoom-out-right" >
          
            <Buttonall >
              <h4>Hubungi Sekarang Juga</h4>
            </Buttonall>
          </a>
        </p>
      </Col>
      <Col md={6} data-aos="fade-left" style={{ padding: '1rem' }} className="responsive-image text-center">
        <img
          src="/src/assets/test.jpg"
          width="100%" // Gunakan width 100% untuk responsivitas
          height="auto"
          className="responsive-image"
          alt="Responsive"
        />
      </Col>
    </Row>
  </Container>
</div>


<Container style={{ marginTop: "2vh", padding: '1rem' }}>
            <Row data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                 className="text-center">
                <h2>Klien Kami</h2>
                <p>Klien yang bekerja sama dengan <b>Zenka Folks.</b></p>
                {/* Mengatur tata letak responsif */}
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra1.png" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra2.jpg" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra3.webp" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra4.webp" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                {/* Baris kedua */}
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra5.jpg" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra7.jpg" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitram.png" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} className="p-2">
                    <img src="src/assets/mitra6.png" width="60%" className="img-fluid" alt="Responsive" />
                </Col>
            </Row>
        </Container>

      <Container style={{ marginTop: '15vh' }}>
    <Row style={{  backgroundColor: '#D4E7FF', borderRadius: '0 100px 0 100px', padding: '3.5rem' }} className="d-flex align-items-center" data-aos="fade-left">
        <Col md={3} style={{ textAlign: 'left', padding: '2rem' }}>
            <h2>Apa Yang Bisa Kami Bantu?</h2>
            <p>Kami bisa membantu dalam hal desain grafis, animasi, fotografi, dan videografi.</p>
            <a href="#videografis">
                <Buttonall variant="info" style={{ borderRadius: 25, color: '#ffff', backgroundColor: '#1F9DBB' }}>
                    <h5>Selengkapnya</h5>
                </Buttonall>
            </a>
        </Col>
        <Col md={3} style={{ textAlign: 'center', padding: '2rem' }} >
            <Card style={{ borderRadius: 25, height: '100%' }} data-aos="flip-down">
                <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Card.Title style={{ width: '35%', height: '25%', background: '#FFF7E3', borderRadius: 20, margin: '0 auto' }}>
                    < svg style={{marginTop: '10px' , color: '#FF9900'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16"> <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/> <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/> </svg>
                    </Card.Title>
                    <CardTitle style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <h3>Fotografis</h3>
                    </CardTitle>
                    <Card.Text  style={{textAlign: 'justify'}}>Layanan potret, produk. Kami menghadirkan fotografi profesional yang menangkap momen dan detail dengan keahlian,kreatifitas dan menjadikan setiap gambar berkesan.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3} style={{ textAlign: 'center', padding: '2rem' }}>
            <Card style={{ borderRadius: 25, height: '100%' }} data-aos="flip-down">
                <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Card.Title style={{ width: '35%', height: '25%', background: '#F1F7FF', borderRadius: 20, margin: '0 auto' }}>
                    <svg  style={{marginTop: '10px', color: '#2639ED' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16"> <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/> </svg>
                    </Card.Title>
                    <CardTitle style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <h3>Desain Grafis</h3>
                    </CardTitle>
                    <Card.Text style={{textAlign: 'justify'}} > Layanan logo, menciptakan estetika yang menarik seperti gambar, teks, dan warna. Kami menghadirkan desain inovatif yang meningkatkan citra merek dan menjangkau audiens secara efektif.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3} style={{ textAlign: 'center', padding: '2rem' }}>
            <Card style={{ borderRadius: 25, height: '100%' }} data-aos="flip-down">
                <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Card.Title style={{ width: '35%', height: '25%', background: '#DEFFEE', borderRadius: 20, margin: '0 auto' }}>
                    <svg  style={{marginTop: '10px' , color: '#00DA71' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/> </svg>
                    </Card.Title>
                    <CardTitle style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <h3>Videografis</h3>
                    </CardTitle>
                    <Card.Text  style={{textAlign: 'justify'}}> Layanan membuat grafis yang menarik, efek visual yang mengesankan, dan Motion Grafis. Kami menciptakan pengalaman visual yang dinamis untuk memperkuat pesan Anda dalam promosi.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

<Container id="videografis">

</Container>

<Container style={{ marginTop: '5vh', padding: '2rem' }} className="foto" id="fotografis">
      <Row style={{  backgroundColor: '#D4E7FF', borderRadius: '0 100px 0 100px', padding: '2rem' }} className="d-flex align-items-center" data-aos="fade-left">
        {/* Kolom teks */}
        <Col xs={12} md={6} style={{ textAlign: 'justify', marginBottom: '2rem' }}>
          <h1>Fotografis</h1>
          <p>Produk Foto grafis kami adalah hasil foto promosi yang diambil semenarik mungkin untuk memperkenalkan produk baru dalam bentuk foto.</p>
          <p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h5>Biaya Jasa</h5></Accordion.Header>
                <Accordion.Body>
                  <Card.Title>Mulai dari <h2>Rp.25.000</h2></Card.Title>
                  <Button as={Link} data-aos="zoom-out-right" variant="info" style={{ borderRadius: 10, color: '#fff', backgroundColor: 'orange' }} to="/harga/#fotografis">
                            <h5>Rincian</h5>
                        </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </p>
        </Col>

        {/* Kolom carousel */}
        <Col  xs={12} sm={6} md={4} lg={3} className="p-2 justify-content-center"  style ={{backgroundColor: '#D4E7FF'}}>
          <Carousel style={{ width: '300px', height: '400px', borderRadius: 25 }}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/foto1.jpg"
                alt="First slide"
                style={{ width: '100%', height: '100%'  , borderRadius: 25}}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/foto2.jpg"
                alt="Second slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/foto3.jpg"
                alt="Third slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        
        <Col xs={12} sm={6} md={4} lg={3} className="p-2 justify-content-center"   style ={{backgroundColor: '#D4E7FF'}}>
          <Carousel style={{ width: '300px', height: '400px', borderRadius: 25 }}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/foto4.jpg"
                alt="First slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25}}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/foto5.jpg"
                alt="Second slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/foto6.jpg"
                alt="Third slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>

<Container style={{ marginTop: '5vh', padding: '2rem' }} className="foto" id="fotografis">
      <Row style={{  backgroundColor: '#D4E7FF', borderRadius: '0 100px 0 100px', padding: '2rem' }} className="d-flex align-items-center" data-aos="fade-left">
        {/* Kolom teks */}
        <Col xs={12} md={6} style={{ textAlign: 'justify', marginBottom: '2rem' }}>
          <h1>Desain grafis</h1>
          hasil desain grafis kami buat adalah sebuah desain baik itu feeds instagram,poster,animasi dalam lainnya dengan hasil yang menarik perhatian, dirancang untuk mempromosikan produk baru.<p>
            <br></br>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h5>Biaya Jasa</h5></Accordion.Header>
                <Accordion.Body>
                  <Card.Title>Mulai dari <h2>Rp.30.000</h2></Card.Title>
                  <Button as={Link} data-aos="zoom-out-right" variant="info" style={{ borderRadius: 10, color: '#fff', backgroundColor: 'orange' }} to="/harga/#desaingrafis">
                            <h5>Rincian</h5>
                        </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </p>
        </Col>

        {/* Kolom carousel */}
        <Col xs={12} sm={6} md={4} lg={3} className="p-2 justify-content-center"   style ={{backgroundColor: '#D4E7FF'}}>
          <Carousel style={{ width: '300px', height: '400px', borderRadius: 25 }}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/d1.jpg"
                alt="First slide"
                style={{ width: '100%', height: '100%'  , borderRadius: 25}}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/d2.jpg"
                alt="Second slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/d3.jpg"
                alt="Third slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        
        <Col xs={12} sm={6} md={4} lg={3} className="p-2 justify-content-center"   style ={{backgroundColor: '#D4E7FF'}}>
          <Carousel style={{ width: '300px', height: '400px', borderRadius: 25 }}>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/d4.jpg"
                alt="First slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25}}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/d5.jpg"
                alt="Second slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="src/assets/d6.jpg"
                alt="Third slide"
                style={{ width: '100%', height: '100%' , borderRadius: 25 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>

<Container style={{ marginTop: '5vh' }} className="video" >
    <Row style={{  backgroundColor: '#D4E7FF', borderRadius: '0 100px 0 100px', padding: '2rem' }} className="d-flex align-items-center"  data-aos="fade-left">
        {/* Kolom teks */}
        <Col xs={12} md={6} style={{ textAlign: 'justify', marginBottom: '2rem' }} >
            <h1>Videografis</h1>
            <p>Produk video grafis kami buat adalah sebuah video promosi yang menggabungkan animasi 2D yang dinamis dengan grafis yang menarik perhatian, dirancang untuk memperkenalkan produk baru.</p>
            <p>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5>Biaya Jasa</h5></Accordion.Header>
                        <Accordion.Body>
                            <Card.Title>Mulai dari <h2>Rp.400.000</h2></Card.Title>
                            <Button as={Link} data-aos="zoom-out-right" variant="info" style={{ borderRadius: 10, color: '#fff', backgroundColor: 'orange' }} to="/harga/#videografis1">
                            <h5>Rincian</h5>
                        </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </p>
        </Col>

        {/* Kolom video */}
        <Col >
            <video controls style={{ outline: 'none', width: '100%', height: '100%', borderRadius: 15 }}>
                <source src="src/assets/video2.mp4" type="video/mp4" />
            </video>
</Col>

    </Row>
</Container>
 




      <br />
      <Footer />
    </div>
  );
}

export default Beranda;
