import React from 'react';

const Resume = () => {
    return (
        <>
  {/* Resume
    ============================================= */}
  <section id="resume" className="section">
    <div className="container px-lg-5">
      {/* Heading */}
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
          Summary
        </h2>
        <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
          Resume
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />{" "}
        </p>
      </div>
      {/* Heading end*/}
      <div className="row gx-5">
        {/* My Education */}
        <div className="col-md-6">
          <h2 className="text-6 fw-600 mb-4">My Education</h2>
          <div className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">2000 - 2004</p>
            <h3 className="text-5">Computer Science</h3>
            <p className="text-danger">International University</p>
            <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">2005 - 2008</p>
            <h3 className="text-5">Bachelor Degree</h3>
            <p className="text-danger">University of California</p>
            <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">2009 - 2012</p>
            <h3 className="text-5">Master Degree</h3>
            <p className="text-danger">Harvard University</p>
            <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
        {/* My Experience */}
        <div className="col-md-6">
          <h2 className="text-6 fw-600 mb-4">My Experience</h2>
          <div className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">2012 - 2013</p>
            <h3 className="text-5">Jr. UI UX Designer</h3>
            <p className="text-danger">Themeforest</p>
            <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">2014 - 2016</p>
            <h3 className="text-5">Jr. Product Designer</h3>
            <p className="text-danger">Dribbble</p>
            <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
            <h3 className="text-5">Product Designer</h3>
            <p className="text-danger">Adobe</p>
            <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
      </div>
      {/* My Skills */}
      <h2 className="text-6 fw-600 mt-4 mb-4">My Skills</h2>
      <div className="row gx-5">
        <div className="col-md-6">
          <p className="text-dark fw-500 text-start mb-2">
            Web Design <span className="float-end">65%</span>
          </p>
          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow={65}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p className="text-dark fw-500 text-start mb-2">
            HTML/CSS <span className="float-end">95%</span>
          </p>
          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow={95}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p className="text-dark fw-500 text-start mb-2">
            JavaScript <span className="float-end">80%</span>
          </p>
          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="col-md-6">
          <p className="text-dark fw-500 text-start mb-2">
            React JS <span className="float-end">70%</span>
          </p>
          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p className="text-dark fw-500 text-start mb-2">
            Angular Js <span className="float-end">60%</span>
          </p>
          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p className="text-dark fw-500 text-start mb-2">
            Bootstrap <span className="float-end">99%</span>
          </p>
          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "99%" }}
              aria-valuenow={99}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill shadow-none"
        >
          Download CV{" "}
          <span className="ms-1">
            <i className="fas fa-download" />
          </span>
        </a>
      </div>
    </div>
  </section>
  {/* Resume end */}
</>

    );
};

export default Resume;