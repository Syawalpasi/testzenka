import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './component/Footer';
import Header from './component/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import './component/style.css';

function Harga() {
    // Inisialisasi AOS
    React.useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            once: false, // Apakah animasi hanya akan diputar sekali
            delay: 0, // Penundaan animasi dalam milidetik
            easing: 'ease', // Jenis easing
        });
    }, []);

    const images = [
        '/src/assets/catalog1.jpeg',
        '/src/assets/catalog2.jpeg',
    ];
    const images1 = [
        '/src/assets/kreatif1.jpg',
        '/src/assets/kreatif2.jpg',
    ];
    const images2 = [
        '/src/assets/model1.jpg',
        '/src/assets/model3.jpg',
        
    ];
    const images3 = [
        '/src/assets/d1.jpg',
        '/src/assets/d5.jpg',
    ];
    const images4 = [
        '/src/assets/mockup1.png',
        '/src/assets/mockup2.png',
    ];
    const images5 = [
        '/src/assets/shortvideo.png',
    ];
    const images6 = [
        '/src/assets/campangin.png',
    ];

    return (
        <div>
            {/* Header tanpa efek AOS */}
            <Header />

            {/* Konten Harga */}
            <Container className="mb-4" >
                <Row style={{ textAlign: 'center' }}>
                    <h1>Harga Layanan</h1>
                    <p>Harga dari layanan desain yang disediakan Zenka Folks</p>
                </Row>
            </Container>



<div  id="fotografis">
<Container   style={{ marginTop: '10vh' }} >
  <hr></hr>
  <h2 data-aos="fade-right">
    <b>Foto Grafis</b>
  </h2>
  <hr></hr></Container>
  </div>
{/* content1 Fotografis */}
<Container  className="mb-4" data-aos="fade-right" style={{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col md={6}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            {/* Card.Img dengan kelas img-fluid dan width 100% untuk responsivitas */}
                            <Card.Img
                                variant="top"
                                src={images[idx]}
                                className="img-fluid w-100"
                                alt={`Image ${idx + 1}`}
                            />
                            <Card.Body>
                                {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>

        {/* Kolom kanan */}
        <Col md={6}>
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{ backgroundColor: 'white' }}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            {/* Menggunakan kelas fs- untuk ukuran teks responsif */}
                            <Card.Title className="fs-4">Product Photos</Card.Title>
                            <Card.Title className="fs-3"><h1>Catalog</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Tipe yang jadi dasar untuk semua jenis produk. Foto produk kamu bakal tampil dengan latar polos yang memperkuat detail produk sehingga customer bisa melihat keseluruhan produk secara jelas.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.25.000</h2>
                            </Card.Title>
                            <Card.Title>
                                <h4 className="fs-5">/ Product</h4>
                                3 foto
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

{/* content 2  fotografi*/}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'justify'
}}>
    <Row>
        <Col xs={12} md={6} style={{ marginBottom: '1rem' }}>
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{ backgroundColor: 'white' }}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            <Card.Title style={{ fontSize: '1.5rem' }}>Product Photos</Card.Title>
                            <Card.Title style={{ fontSize: '2rem' }}><h1>Creative</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title style={{ fontSize: '1.25rem' }}>Deskripsi</Card.Title>
                            <Card.Text style={{ textAlign: 'justify', fontSize: '1rem' }}>
                                Tipe yang bakal bikin foto produk kamu lebih dari sekedar menarik untuk merayu audience, karena menggunakan properti yang lebih banyak dan tema yang lebih bebas, pastinya bisa sesuai dengan keinginan kamu.
                            </Card.Text>
                            <Card.Title style={{ fontSize: '1.25rem' }}>Mulai dari<h2>Rp.50.000</h2></Card.Title>
                            <Card.Title style={{ fontSize: '1rem' }}><h4>/ Product</h4></Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={6}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={images1[idx]} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
</Container>

{/* content 3 foto */}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col xs={12} md={6}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            {/* Card.Img dengan kelas img-fluid untuk responsivitas */}
                            <Card.Img
                                variant="top"
                                src={images2[idx]}
                                className="img-fluid"
                                alt={`Image ${idx + 1}`}
                            />
                            <Card.Body>
                                {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>

        {/* Kolom kanan */}
        <Col xs={12} md={6}>
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{ backgroundColor: 'white' }}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            {/* Menggunakan kelas fs- untuk ukuran teks responsif */}
                            <Card.Title className="fs-4">Product Photos</Card.Title>
                            <Card.Title className="fs-3"><h1>With Model</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Tipe yang paling cocok untuk produk fashion dan kecantikan. Produk kamu bakal dipakai oleh model terbaik dari Zenka yang pastinya akan membuat produk kamu stand out dan lebih menarik minat audience karena mereka bisa lihat langsung produknya saat dipakai.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.125.000</h2>
                            </Card.Title>
                            <Card.Title>
                                <h4 className="fs-5">/ Product</h4>
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>





<div id="desaingrafis"></div>
<Container  style={{ marginTop: '10vh' }} >
<h2 data-aos="fade-right">
<hr></hr>
<b>Desain Grafis</b>
    
  </h2>
  <hr></hr>
</Container>

{/* content 1 desain grafis */}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col xs={12} md={6}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            {/* Gunakan kelas `img-fluid` untuk memastikan gambar responsif */}
                            <Card.Img
                                variant="top"
                                src={images3[idx]}
                                className="img-fluid"
                                alt={`Image ${idx + 1}`}
                            />
                            <Card.Body>
                                {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>

        {/* Kolom kanan */}
        <Col xs={12} md={6}>
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{ backgroundColor: 'white' }}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            {/* Menggunakan kelas `fs-` untuk ukuran teks responsif */}
                            <Card.Title className="fs-4">Content Design</Card.Title>
                            <Card.Title className="fs-3"><h1>Design Feed & Story</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Design untuk bikin tampilan feed atau story akun sosmed bisnis kamu jadi beda dari biasanya. Konten kamu dijamin jadi kece dan kekinian, pastinya bakal lebih menarik audiens.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.30.000</h2>
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>


{/* content 2 desain grafis */}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col xs={12} md={6} className="mb-3">
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center"  style={{ backgroundColor: '#FFFF'}}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            {/* Menggunakan kelas fs- untuk ukuran teks responsif */}
                            <Card.Title className="fs-4">Product Design</Card.Title>
                            <Card.Title className="fs-3"><h1>Design Belt atau Packaging</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Design untuk belt atau packaging produk yang jadi komponen penting dalam penjualan. Belt atau packaging produk kamu akan tampil dengan design yang eye catching untuk meningkatkan nilai jual.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.400.000</h2>
                            </Card.Title>
                        </Col>
                        
                    </Row>
                </Card.Body>
            </Card>
        </Col>

        {/* Kolom kanan */}
        <Col xs={12} md={6}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            {/* Gunakan kelas img-fluid dan w-100 untuk gambar responsif */}
                            <Card.Img
                                variant="top"
                                src={images4[idx]}
                                className="img-fluid w-100"
                                alt={`Image ${idx + 1}`}
                            />
                            <Card.Body>
                                {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
</Container>



<div  id="videografis1"></div>
<Container style={{ marginTop: '10vh' }} >
<h2 data-aos="fade-right">
<hr></hr>
<b >Video Grafis</b>
    
  </h2>
  <hr></hr>
</Container>
{/* content1 video */}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col xs={12} md={6} className="mb-3">
            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className="d-flex align-items-center" >
                            {/* Gunakan kelas `img-fluid` dan `w-100` untuk gambar responsif */}
                            <Card.Img
                                variant="top"
                                src={images5[idx]}
                                className="img-fluid w-50"
                                alt={`Image ${idx + 1}`}
                            />
                            <Card.Body>
                                {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
        {/* Kolom kanan */}
        <Col xs={12} md={6}>
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{ backgroundColor: '#FFFF'}}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            {/* Menggunakan kelas `fs-` untuk ukuran teks responsif */}
                            <Card.Title className="fs-4">Commercial Video</Card.Title>
                            <Card.Title className="fs-3"><h1>Long Form Video</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Video berdurasi lebih dari 60 detik yang lebih detail dalam menyampaikan pesan atau informasi tentang produk atau layanan. Jenis video ini efektif dalam meningkatkan pemahaman audiens terhadap produk atau layanan yang dipasarkan.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.1.200.000</h2>
                            </Card.Title>
                            <Card.Title className="fs-5">
                                <h4>/ 1 Video</h4>
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

{/* content 2 video*/}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col xs={12} md={6} className="mb-3" >
            <Card style={{ height: '100%',  }} >
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{backgroundColor: '#FFFF'}} >
                        <Col xs={12} md={12} lg={6} className="text-center">
                            <Card.Title className="fs-4">Commercial Video</Card.Title>
                            <Card.Title className="fs-3"><h1>Motion Graphic Plan</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Video yang menampilkan ilustrasi atau gambar yang bergerak. Produk kamu akan ditampilkan dengan singkat, padat, dan pastinya bakal menarik lebih banyak minat karena terdiri dari gabungan elemen audio dan visual.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.500.000</h2>
                            </Card.Title>
                            <Card.Title className="fs-5">
                                <h4>/ 2 Videos</h4>
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>

        {/* Kolom kanan */}
        <Col xs={12} md={6}>
            <Card>
                {/* Gunakan kelas video-fluid dan w-100 untuk video responsif */}
                <video controls className="w-50" style={{ outline: 'none', borderRadius: 15 }}>
                    <source src="src/assets/stopmotion.mp4" type="video/mp4" />
                </video>
                <Card.Body>
                    {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

{/* content 3 video */}
<Container className="mb-4" data-aos="fade-left" style={{
    backgroundColor: 'white',
    textAlign: 'justify',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}}>
    <Row>
        {/* Kolom kiri */}
        <Col xs={12} md={6} className="mb-3">
            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className="d-flex align-items-center" >
                            {/* Gunakan kelas `img-fluid` dan `w-100` untuk gambar responsif */}
                            <Card.Img
                                variant="top"
                                src={images6[idx]}
                                className="img-fluid w-50"
                                alt={`Image ${idx + 1}`}
                            />
                            <Card.Body>
                                {/* Anda dapat menambahkan konten dalam Card.Body jika diinginkan */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>

        {/* Kolom kanan */}
        <Col xs={12} md={6}>
            <Card style={{ height: '100%' }}>
                <Card.Body>
                    <Row className="d-flex align-items-center" style={{ backgroundColor: '#FFFF'}}>
                        <Col xs={12} md={12} lg={6} className="text-center">
                            {/* Menggunakan kelas `fs-` untuk ukuran teks responsif */}
                            <Card.Title className="fs-4">Commercial Video</Card.Title>
                            <Card.Title className="fs-3"><h1>Campaign Ads Plan</h1></Card.Title>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Card.Title className="fs-4">Deskripsi</Card.Title>
                            <Card.Text className="text-justify fs-6">
                                Video dengan durasi lebih dari 60 detik dengan berbagai tujuan untuk konten pemasaran produk kamu, seperti company profile, memperkenalkan produk baru, meningkatkan familiarity produk, dan pastinya meningkatkan penjualan.
                            </Card.Text>
                            <Card.Title className="fs-4">
                                Mulai dari <h2 className="fs-3">Rp.2.500.000</h2>
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

          <Footer />
        </div>
    );
}

export default Harga;
