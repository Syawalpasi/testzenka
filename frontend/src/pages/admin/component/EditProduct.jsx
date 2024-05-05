import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button, Figure, Modal, Card } from 'react-bootstrap';

const EditProduct = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [showModal, setShowModal] = useState(false); // State untuk mengontrol tampilan modal
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            setShowModal(true); // Menampilkan modal ketika produk berhasil diperbarui
            setTimeout(() => {
                setShowModal(false); // Menutup modal setelah 3 detik
                navigate("/dashboard"); // Navigasi kembali ke halaman admin setelah berhasil memperbarui produk
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    {/* Bungkus Formulir di dalam Card dengan shadow */}
                    <Card className="shadow p-4">
                        <Card.Title>Edit Product</Card.Title>
                        <Form onSubmit={updateProduct}>
                            <Form.Group controlId="productName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Product Name"
                                />
                            </Form.Group>

                            <Form.Group controlId="productImage" className="my-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={loadImage}
                                />
                            </Form.Group>

                            {/* Menampilkan preview gambar jika ada */}
                            {preview && (
                                <Figure>
                                    <Figure.Image
                                        width={200}  
                                        height={200}  
                                        alt="Preview Image"
                                        src={preview}
                                    />
                                </Figure>
                            )}

                            {/* Perbesar ukuran tombol dengan menambahkan kelas btn-lg */}
                            <Button variant="success" type="submit" className="btn-lg">
                                Update
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>

            {/* Modal untuk menampilkan pesan bahwa produk berhasil diperbarui */}
            <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
                <Modal.Body>Product successfully updated!</Modal.Body>
            </Modal>
        </Container>
    );
};

export default EditProduct;
