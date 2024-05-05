import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Story() {
    // Inisialisasi AOS
    React.useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            once: true, // Apakah animasi hanya akan diputar sekali
            delay: 0, // Penundaan animasi dalam milidetik
            easing: 'ease', // Jenis easing
        });
    }, []);

    return (
        <Accordion flush>
            {/* Sejarah Kami */}
            <Accordion.Item eventKey="0" style={{ borderColor: 'orange' }} data-aos="fade-right">
                <Accordion.Header><h2>Sejarah Kami</h2></Accordion.Header>
                <Accordion.Body >
                    <p>
                        <b>Zenka Folks </b> adalah sebuah creative digital agency yang berdiri pada bulan
                        September 2022. Dimulai dari sekumpulan tim kreatif in-house yang berisikan
                        fotografer, editor, dan desainer grafis yang ingin menjadi lebih baik di dunia
                        kreasi digital. Zenka berasal dari kanji (zen) yang berarti "kebaikan" dan kanji (ka) 
                        yang berarti "perubahan" atau "berubah," yang mencerminkan filosofi perusahaan 
                        untuk selalu membawa perubahan yang baik.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            
            {/* Arti Logo Kami */}
            <Accordion.Item eventKey="1" style={{ borderColor: 'orange' }} data-aos="fade-left">
                <Accordion.Header><h2>Arti Logo Kami</h2></Accordion.Header>
                <Accordion.Body data-aos="fade-left">
                    <Row>
                        <Col md={4}>
                            <h3>Logo</h3>
                            <p>
                                Menggunakan kombinasi logotype yang diambil dari nama perusahaan dan 
                                wordmark yang menggambarkan masyarakat atau komunitas, dengan tujuan 
                                mempertegas visualisasi logo oleh target audiens.
                            </p>
                        </Col>
                        <Col md={4}>
                            <img
                                src="/src/assets/makna.png"
                                height={'350px'}
                                width={'auto'}
                                alt="Arti Logo"
                            />
                        </Col>
                        <Col md={4}>
                            <h3>Zenka Folks</h3>
                            <p>
                                Menggambarkan masyarakat atau orang-orang yang membawa perubahan baik, 
                                yang digunakan sebagai filosofi dalam pengembangan ide untuk pembuatan logo ini.
                            </p>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            
            {/* Visi Misi Kami */}
            <Accordion.Item eventKey="2" style={{ borderColor: 'orange' }}data-aos="fade-right">
                <Accordion.Header><h2>Visi Misi Kami</h2></Accordion.Header>
                <Accordion.Body data-aos="fade-right">
                    <Row>
                        <Col md={6}>
                            <Card style={{ width: '40rem' }}>
                                <Card.Body>
                                    <Card.Title><h4>Visi</h4></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Visi Zenkafolks</Card.Subtitle>
                                    <Card.Text>
                                        Menjadi sebuah creative digital agency yang berisikan orang-orang dengan 
                                        gagasan yang segar dan ide yang berbeda untuk membantu, menciptakan, 
                                        memantapkan, dan menyempurnakan segala ciptaan atau kreasi menjadi lebih baik 
                                        dari sebelumnya.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '40rem' }}>
                                <Card.Body>
                                    <Card.Title><h4>Misi</h4></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Misi dari Zenkafolks</Card.Subtitle>
                                    <Card.Text>
                                        <p>- Selalu memberikan ide yang berbeda dan segar.</p>
                                        <p>- Menciptakan suasana yang berbeda dalam dunia kreasi digital.</p>
                                        <p>- Membantu UMKM serta brand nasional maupun internasional.</p>
                                        <p>- Mencapai tujuan yang lebih besar dalam dunia digital.</p>
                                        <p>- Memberikan hiburan dan pelajaran melalui media digital.</p>
                                        <p>- Mewadahi para pekerja kreatif untuk dapat bekerja dan berkarya.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            
            {/* Tim Kami */}
            <Accordion.Item eventKey="3" style={{ borderColor: 'orange' }} data-aos="fade-left">
                <Accordion.Header><h2>Tim Kami</h2></Accordion.Header>
                <Accordion.Body data-aos="fade-left">
                <Row>
    <Col md={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img
                src="/src/assets/lutfi.jpg"
                alt="Lufhfi Siregar"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title><h4>Lufhfi Siregar</h4></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Creative Director</Card.Subtitle>
            </Card.Body>
        </Card>
    </Col>
    <Col md={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img
                src="/src/assets/zaki.jpg"
                alt="Zakian"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title><h4>Zakian</h4></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Graphic Design</Card.Subtitle>
            </Card.Body>
        </Card>
    </Col>
    <Col md={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img
                src="/src/assets/dimas.jpg"
                alt="Dimas"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title><h4>Dimas</h4></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Editor</Card.Subtitle>
            </Card.Body>
        </Card>
    </Col>
    <Col md={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img
                src="/src/assets/husein.jpg"
                alt="Husein"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title><h4>Husein</h4></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fotografer</Card.Subtitle>
            </Card.Body>
        </Card>
    </Col>
</Row>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Story;
