import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'; // Impor Nav dari React-Bootstrap
import { Modal, Button } from 'react-bootstrap'; // Impor Modal dan Button dari React-Bootstrap
import './LoginForm.css'; // Impor CSS untuk efek hover oranye dan aktif

const Navbar = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // State untuk mengontrol tampilan modal

    const handleShowModal = () => setShowModal(true); // Fungsi untuk membuka modal
    const handleCloseModal = () => setShowModal(false); // Fungsi untuk menutup modal

    const confirmLogout = async () => {
        try {
            await axios.delete('http://localhost:3000/logout');
            // Jika logout berhasil, arahkan ke halaman beranda
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div>
            {/* Navbar */}
            <div className="navbar-container">
                <div className="logo-container">
                    <img
                        src="/src/assets/zenka.png"
                        width="150px"
                        className="d-inline-block align-center"
                        alt="Zenka Logo"
                    />
                </div>
                <div className="dashboard-text">
                    <h4>Dashboard Admin</h4>
                </div>
            </div>

            {/* Nav */}
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/dashboard" eventKey="/home"><b>Portofolio</b></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={handleShowModal}><b>Logout</b></Nav.Link>
                </Nav.Item>
            </Nav>

            {/* Modal untuk konfirmasi logout */}
            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apa anda yakin untuk keluar?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => { confirmLogout(); handleCloseModal(); }}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Navbar;
