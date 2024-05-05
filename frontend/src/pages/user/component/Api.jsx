import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Modal, Button, Form } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS

const Api = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Inisialisasi AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            once: false, // Apakah animasi hanya akan diputar sekali
            delay: 0, // Penundaan animasi dalam milidetik
            easing: 'ease', // Jenis easing
        });
    }, []);

    useEffect(() => {
        // Panggil API untuk mendapatkan data produk
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/products");
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Fungsi untuk membuka modal
    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Fungsi untuk menutup modal dan mereload halaman
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
        window.location.reload(); // Memuat ulang halaman
    };

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter produk berdasarkan nama produk sesuai kata kunci pencarian
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    return (
        <Container className="mt-5">
            <Row className="mt-2">
                {/* Form pencarian */}
                <Col xs={12} className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Cari produk berdasarkan nama"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Col>
            </Row>

            <Row className="mt-2">
                {/* Jika filteredProducts kosong, tampilkan pesan "Tidak ada data" */}
                {filteredProducts.length === 0 ? (
                    <Col xs={12}>
                        <p>Tidak ada data.</p>
                    </Col>
                ) : (
                    // Tampilkan hasil pencarian
                    filteredProducts.map((product, index) => (
                        <Col xs={6} sm={6} md={3} lg={3} key={product.id} className="mb-3">
                            {/* Card produk dengan animasi AOS fade down */}
                            <Card
                                onClick={() => handleOpenModal(product)}
                                style={{ cursor: "pointer" }}
                                data-aos="fade-down"
                                data-aos-delay={`${index * 100}`}
                            >
                                <Card.Img variant="top" src={product.url} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>

            {/* Modal untuk menampilkan detail produk */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct ? selectedProduct.name : "Produk"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct ? (
                        <img
                            src={selectedProduct.url}
                            alt={selectedProduct.name}
                            style={{ width: "100%" }}
                        />
                    ) : (
                        <p>Tidak ada data produk yang dipilih.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Api;
