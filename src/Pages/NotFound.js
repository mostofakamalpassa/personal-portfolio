import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';

const NotFound = () => {
    return (
       <Container>
           <Row>
               <Col className='offset-sm-3 my-4'>
                <img className='img-fluid' src="/images/notfound.jpg" alt="" />
               </Col>
           </Row>
       </Container>
    );
};

export default NotFound;