import React, { useRef, useState } from 'react';
import { Form, Button, Modal, Spinner, Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // State untuk menunjukkan bahwa email telah terkirim
  const [loading, setLoading] = useState(false); // State untuk menunjukkan bahwa proses pengiriman email sedang berlangsung

  const handleCloseModal = () => {
    setShowModal(false);
    setEmailSent(false); // Reset state emailSent ketika modal ditutup
    window.location.href = '/kontak'; // Mengarahkan kembali ke halaman utama setelah modal ditutup
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Mengatur state loading menjadi true saat proses pengiriman email dimulai

    emailjs
      .sendForm('service_w1lkufz', 'template_mc3s33j', formRef.current, 'jsNSHvu_sDzpjy80T')
      .then(
        () => {
          console.log('SUCCESS!');
          setShowModal(true); // Menampilkan modal ketika email berhasil dikirim
          setEmailSent(true); // Mengatur state emailSent menjadi true
          setLoading(false); // Mengatur state loading menjadi false setelah email berhasil dikirim
          formRef.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error);
          setLoading(false); // Mengatur state loading menjadi false jika pengiriman email gagal
        }
      );
  };

  return (
    <div className="container mt-1" >
      <Form ref={formRef} onSubmit={sendEmail} >
        <Form.Group controlId="formName">
          <Form.Label>Nama Kamu</Form.Label>
          <Form.Control type="text" name="from_name" placeholder="Masukkan Nama Kamu" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email Kamu</Form.Label>
          <Form.Control type="email" name="from_email" placeholder="Masukkan Email Kamu" required />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Pesan</Form.Label>
          <Form.Control as="textarea" rows={5} name="message" placeholder="Masukkan Pesan Kamu" required />
        </Form.Group>
        <Row>
        <Button
  variant="primary"
  type="submit"
  disabled={loading}
  className="mt-5 mx-auto d-block" // Tambahkan d-block untuk membuat tombol menjadi block element, serta mx-auto untuk mengatur margin tengah
  style={{
    maxWidth: '300px', // Atur maxWidth ke 300px atau sesuai kebutuhan untuk mengontrol lebar tombol
    backgroundColor: 'orange', // Ubah warna background tombol menjadi orange
    borderColor: 'orange', // Ubah warna border tombol menjadi orange
  }}
>
  {loading ? (
    <>
      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
      {' '}Mengirim...
    </>
  ) : (
    'Kirim Pesan'
  )}
</Button>

        </Row>
        
       

      </Form>

      {/* Modal for showing email sent */}
      <Modal show={showModal && emailSent} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Berhasil!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Email mu sudah Terkirim dengan Baik!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
