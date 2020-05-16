import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header() {
    return (
        // <Container>
        // <Row>
        //     <Col sm={8}>sm=8</Col>
        //     <Col sm={4}>sm=4</Col>
        // </Row>
        // <Row>
        //     <Col sm>sm=true</Col>
        //     <Col sm>sm=true</Col>
        //     <Col sm>sm=true</Col>
        // </Row>
        // </Container>
        <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
    )
}

export default Header
