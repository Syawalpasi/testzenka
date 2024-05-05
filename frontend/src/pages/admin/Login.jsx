import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // CSS untuk styling halaman login
import Buttonall from './component/Buttonall';


const Login = () => {
    // State untuk menyimpan input email, password, dan pesan kesalahan
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    // Inisialisasi useNavigate untuk navigasi
    const navigate = useNavigate();

    // Fungsi untuk menangani pengiriman formulir login
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            // Mengirim permintaan POST ke endpoint login
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });

            // Jika login berhasil, arahkan ke halaman dashboard
            console.log('Login berhasil:', response);
            navigate('/dashboard');
        } catch (error) {
            // Menangani kesalahan saat login
            console.error('Login gagal:', error.response ? error.response.data : error);
            if (error.response) {
                setMsg(error.response.data.msg); // Tampilkan pesan kesalahan
            } else {
                setMsg('Terjadi kesalahan saat login');
            }
        }
    };

    return (
        <div className="container mt-5">
            <div id="login-form" className="card p-4 shadow-sm">
                <h1 className="text-center mb-4">Login Admin</h1>
                
                {/* Formulir login */}
                <form onSubmit={handleLogin}>
                    {/* Menampilkan pesan kesalahan */}
                    {msg && (
                        <div className="alert alert-danger text-center">
                            {msg}
                        </div>
                    )}
                    
                    {/* Input email */}
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    {/* Input password */}
                    <div className="mb-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    {/* Tombol login */}

                    <Buttonall type="submit" > Login </Buttonall>
                </form>
            </div>
        </div>
    );
};

export default Login;
