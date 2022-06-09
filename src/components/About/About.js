import React from 'react';

const About = () => {
    return (
        <>
  {/* About
    ============================================= */}
  <section id="about" className="section">
    <div className="container px-lg-5">
      {/* Heading */}
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
          About Me
        </h2>
        <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
          Know Me More
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />{" "}
        </p>
      </div>
      {/* Heading end*/}
      <div className="row gy-5">
        <div className="col-lg-7 col-xl-8 text-center text-lg-start">
          <h2 className="text-7 fw-600 mb-3">
            I'm <span className="text-primary">Simone Olivia,</span> a Web
            Developer
          </h2>
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p>
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="ps-lg-4">
            <ul className="list-style-2">
              <li className="">
                <span className="fw-600 me-2">Name:</span>Simone Olivia
              </li>
              <li className="">
                <span className="fw-600 me-2">Email:</span>
                <a href="mailto:chat@simone.com">chat@simone.com</a>
              </li>
              <li className="">
                <span className="fw-600 me-2">Age:</span>28
              </li>
              <li className="border-0">
                <span className="fw-600 me-2">From:</span>Los Angeles,
                California
              </li>
            </ul>
            <a href="#" className="btn btn-primary rounded-pill">
              Download CV
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="brands-grid separator-border mt-5">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={10}>
                  10
                </span>
                +
              </h4>
              <p className="mb-0">Years Experiance</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={250}>
                  250
                </span>
                +
              </h4>
              <p className="mb-0">Happy Clients</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={650}>
                  650
                </span>
                +
              </h4>
              <p className="mb-0">Projects Done</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={38}>
                  20
                </span>
              </h4>
              <p className="mb-0">Get Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About end */}
</>

    );
};

export default About;