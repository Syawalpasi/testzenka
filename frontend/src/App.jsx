import React from 'react';
import Kontak from './pages/user/Kontak.jsx';
import Beranda from './pages/user/Beranda.jsx';
import Portopolio from './pages/user/Portopolio.jsx';
import Tentang from './pages/user/Tentang.jsx';
import Login from './pages/admin/Login.jsx';
import Register from './pages/admin/Register.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/admin/component/ProductList.jsx';
import AddProduct from './pages/admin/component/AddProduct.jsx';
import EditProduct from './pages/admin/component/EditProduct.jsx';
import Harga from './pages/user/Harga.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import Navbar from './pages/admin/Navbar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/beranda' element={<Beranda />} />
        <Route path='/tentang' element={<Tentang />} />
        <Route path='/harga' element={<Harga/>}/>
        <Route path='/portopolio' element={<Portopolio />} />
        <Route path='/kontak' element={<Kontak />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/list" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="/dashboard" element={
          <>
            <Navbar />
            <Dashboard /></> } />
      </Routes>
    </Router>
  );
}

export default App;


