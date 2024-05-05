import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Figure, Modal, Card } from 'react-bootstrap';

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [showModal, setShowModal] = useState(false); // State untuk mengontrol tampilan modal
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.post("http://localhost:5000/products", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            setShowModal(true); // Menampilkan modal ketika produk berhasil disimpan
            setTimeout(() => {
                setShowModal(false); // Menutup modal setelah 3 detik
                navigate("/dashboard"); // Navigasi kembali ke halaman admin setelah berhasil menyimpan produk
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    {/* Bungkus Formulir di dalam Card dengan shadow */}
                    <Card className="shadow p-4">
                        <Card.Title>Add New Product</Card.Title>
                        <Form onSubmit={saveProduct}>
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

                            <Button variant="success" type="submit" className="btn-lg mt-3">
                                Save
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>

            {/* Modal untuk menampilkan pesan bahwa produk berhasil disimpan */}
            <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
                <Modal.Body>Product successfully saved!</Modal.Body>
            </Modal>
        </Container>
    );
};

export default AddProduct;
