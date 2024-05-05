import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './component/Footer';
import Header from './component/Header';
import Story from './component/story';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Tentang() {
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
        <div>
            {/* Header tanpa efek AOS */}
            <Header />

            {/* AOS Zoom-in pada tentang-container */}
            <div className="tentang-container" style={{ marginTop: '-6vh' }} data-aos="zoom-in">
                <img
                    src="src/assets/ten.png"
                    className="tentang-image"
                    alt="Tentang Kami"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            <Container>
                {/* AOS Fade-up pada Story */}
                <div>
                    <Story></Story>
                </div>
            </Container>
            
            {/* Footer tanpa animasi */}
            <Footer />
        </div>
    );
}

export default Tentang;
