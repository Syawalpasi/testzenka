import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const deleteProduct = async (productId) => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            // Jika tidak ada token, arahkan ke halaman login
            navigate('/login');
            return;
        }
    
        try {
            // Menghapus produk dari API dengan header Authorization untuk otentikasi
            await axios.delete(`http://localhost:5000/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            // Segarkan data produk setelah menghapus
            getProducts(token);
        } catch (error) {
            console.error('Error deleting product:', error);
            // Tangani kesalahan saat menghapus produk
        }
    };
    
    // Fungsi untuk mengambil data produk jika token valid
    const getProducts = async (token) => {
        try {
            const response = await axios.get('http://localhost:5000/products', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            navigate('/login'); // Arahkan pengguna ke halaman login jika terjadi error
        }
    };

    // Fungsi untuk mengambil token pengguna
    const fetchTokenAndProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/token');
            const { token } = response.data;

            // Simpan token ke localStorage
            localStorage.setItem('accessToken', token);

            // Ambil data produk menggunakan token
            getProducts(token);
        } catch (error) {
            console.error('Error fetching token:', error);
            navigate('/login'); // Arahkan pengguna ke halaman login jika terjadi error
        }
    };

    // Ambil data produk dan token saat komponen dimuat
    useEffect(() => {
        fetchTokenAndProducts();
    }, []);

    // Filter produk berdasarkan kata kunci pencarian
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search products by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Col>
                <Col md={6} className="text-end">
                    <Button as={Link} to="/add" variant="success">
                        Add New
                    </Button>
                </Col>
            </Row>

            <Row className="mt-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Col md={3} key={product.id}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={product.url} alt="Product Image" />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Button
                                        as={Link}
                                        to={`/edit/${product.id}`}
                                        variant="primary"
                                        className="me-2"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        Delete
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>Data tidak ada.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default ProductList;
