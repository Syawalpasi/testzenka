import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import ProductList from './component/ProductList';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // Function to refresh token
    const refreshToken = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3000/token');
            console.log('Token response:', response.data);
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            console.error('Error refreshing token:', error);
            if (error.response) {
                navigate('/Dashboard');
            }
        }
    }, [navigate]);

    // Function to fetch users
    const getUsers = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3000/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Users response:', response.data);
            setUsers(response.data);
            console.log('Users set in state:', response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, [token]);

    // Refresh token and fetch users on component mount
    useEffect(() => {
        refreshToken();
        getUsers();
    }, [refreshToken, getUsers]);

    return (
        <div className="container mt-5">
            <h3>Welcome Back: {name}</h3>
            <ProductList></ProductList>
        </div>
    );
};

export default Dashboard;
