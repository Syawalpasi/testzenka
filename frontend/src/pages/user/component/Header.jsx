import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('/Beranda');

    useEffect(() => {
        const currentPath = location.pathname;
        const tabs = {
            '/': 'Beranda',
            '/beranda': 'Beranda',
            '/tentang': 'Tentang Kami',
            '/harga': 'Harga',
            '/portopolio': 'Portofolio',
            '/kontak': 'Kontak kami'
        };
        setActiveTab(tabs[currentPath] || activeTab);
    }, [location.pathname, activeTab]);

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="px-5 shadow mb-5" style={{ backgroundColor: '#FFF', zIndex: 1000 }}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="/src/assets/zenka.png"
                        width="150px"
                        className="d-inline-block align-center"
                        alt="Zenka Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Tautan tambahan di sini jika diperlukan */}
                    </Nav>
                    <Nav className="menu">
                        <Nav.Link
                            as={Link} to="/"
                            className={activeTab === 'Beranda' ? 'active' : ''}
                        >
                            Beranda
                        </Nav.Link>
                        <Nav.Link
                            as={Link} to="/tentang"
                            className={activeTab === 'Tentang Kami' ? 'active' : ''}
                        >
                            Tentang Kami
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} to="/harga"
                            className={activeTab === 'Harga' ? 'active' : ''}
                        >
                            Rincian Harga
                        </Nav.Link>
                        <Nav.Link
                            as={Link} to="/portopolio"
                            className={activeTab === 'Portofolio' ? 'active' : ''}
                        >
                            Portofolio
                        </Nav.Link>
                        <Nav.Link
                            as={Link} to="/kontak"
                            className={activeTab === 'Kontak kami' ? 'active' : ''}
                        >
                            Kontak
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
