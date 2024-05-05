import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../LoginForm.css'; // Impor CSS untuk efek hover oranye dan aktif

function Top() {
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
            <Nav fill variant="tabs" defaultActiveKey="/home" >
                <Nav.Item>
                    <Nav.Link href="/" eventKey="/home"><b>Portofolio</b></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/" eventKey="/users">Logout</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Top;
