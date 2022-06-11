import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import useService from '../../hooks/useService';
import './Portfolio.css'

const Portfolio = () => {
    const {service } = useService();

    console.log("service", service);

    return (


  <section id="portfolio" className="section bg-light">
    <div className="container px-lg-5">
      {/* Heading */}
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
          Portfolio
        </h2>
        <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
          My Work
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
        </p>
      </div>
     
      <Row xs={1} md={2} className="g-4">
      {service.map(item => (
            <Col className='my-3' key={item._id}>
            <Card className='card-hover'>
              <Card.Img variant="top" src={item?.image1}  alt=""/>
              <Card.Body>
                <Card.Title>{item.serviceName}</Card.Title>
                  <div>
                    {item?.serviceItem?.slice(0,3).map(it => (
                      <p>{it}</p>
                    ))}

                  </div>
              </Card.Body>
              <Row className='my-2'>
                <Col>  <a className='btn btn-link btn-lg btn-secondary ms-2 b-block text-light' href={item.gitHub} target="_blink">GitHub</a></Col>
                <Col>  <a className='btn btn-link btn-success btn-lg btn-secondary ms-2 b-block text-light' href={item.liveSite} target="_blink">Live Site</a></Col>
                {item?.getHubServer &&  <Col>  <a className='btn btn-link btn-success btn-lg btn-secondary ms-2 b-block text-light' href={item.gitHubServer} target="_blink">Server Site</a></Col>}
              </Row>
              <Button >Details</Button>
            </Card>
          </Col>

      ))}



 


</Row>
    </div>
  </section>


    );
};

export default Portfolio;