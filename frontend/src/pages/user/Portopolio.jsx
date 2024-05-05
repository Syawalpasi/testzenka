import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Api from './component/Api'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function Portopolio() {
  return (
    <div>
      <Header></Header>
<Container>
  <Row style={{ textAlign: 'center' }}>
    <h1>
      Portofolio
    </h1>
    <p>
    Hasil desain dari Zenka Folks yaitu foto,video dan desain
    </p>
  </Row>
</Container>

  <Api></Api>

  <Footer></Footer>
    </div>
  )
}

export default Portopolio
