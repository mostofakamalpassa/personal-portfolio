import React from 'react';

const Portfolio = () => {
    return (
        <>
  {/* Portfolio
    ============================================= */}
  <section id="portfolio" className="section bg-light">
    <div className="container px-lg-5">
      {/* Heading */}
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
          Portfolio
        </h2>
        <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
          My Work
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />{" "}
        </p>
      </div>
      {/* Heading end*/}
      {/* Filter Menu */}
      <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5">
        <li className="nav-item">
          {" "}
          <a data-filter="*" className="nav-link active" href="">
            All
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a data-filter=".design" href="" className="nav-link">
            Design
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a data-filter=".brand" href="" className="nav-link">
            Brand
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a data-filter=".photos" href="" className="nav-link">
            Photos
          </a>
        </li>
      </ul>
      {/* Filter Menu end */}
      <div className="portfolio popup-ajax-gallery">
        <div className="row portfolio-filter g-4">
          <div className="col-sm-6 col-lg-4 brand">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-1.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-1.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 design">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-2.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-2.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 artwork photos">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-3.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-3.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 artwork brand photos">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-4.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-4.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 design">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-5.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-5.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 brand">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-6.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-6.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 design photos">
            <div className="portfolio-box rounded">
              <div className="portfolio-img rounded">
                {" "}
                <img
                  className="img-fluid d-block"
                  src="images/projects/project-7.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  {" "}
                  <a
                    className="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-7.html"
                  />
                  <div className="portfolio-overlay-details">
                    <h5 className="text-white fw-400">Project Title</h5>
                    <span className="text-light">Category</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio end */}
</>

    );
};

export default Portfolio;