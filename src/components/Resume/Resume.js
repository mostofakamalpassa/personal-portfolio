import React from "react";

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
                <p className="badge bg-primary text-2 fw-400">2014-2016</p>
                <h3 className="text-5">Master ‘S OF ECONOMICS</h3>
                <p className="text-danger">National University</p>
                {/* <p className="mb-0">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p> */}
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge bg-primary text-2 fw-400">2016 - 2018</p>
                <h3 className="text-5">Diploma in PHP</h3>
                <p className="text-danger">IDB IDB-BISEW</p>
                <p className="mb-0">
                  Topic: PHP, Laravel, WordPress, JavaScript, MYSQL
                </p>
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge bg-primary text-2 fw-400">2019-2021</p>
                <h3 className="text-5">
                  Post-Graduate Diploma in IT (PGD in IT)
                </h3>
                <p className="text-danger">
                  Shahjalal University of Science and Technology
                </p>
                <p className="mb-0">
                  Topic: web design, database management, java etc;
                </p>
              </div>
            </div>
            {/* My Experience */}
            <div className="col-md-6">
              <h2 className="text-6 fw-600 mb-4">My Experience</h2>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge bg-primary text-2 fw-400">2018-2019</p>
                <h3 className="text-5">Jr. Web Developer</h3>
                <p className="text-danger">Rising Group</p>
                <p className="mb-0">Chalan base soft ware</p>
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge bg-primary text-2 fw-400">
                  2019 - Current{" "}
                </p>
                <h3 className="text-5">Jr. SoftWare Engineer </h3>
                <p className="text-danger">E-medical Solution</p>
                <p className="mb-0">
                  POS Base Desktop software Use C#, Windows Form , MSSQL Server
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
                HTML/CSS <span className="float-end">80%</span>
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
              <p className="text-dark fw-500 text-start mb-2">
                JavaScript <span className="float-end">60%</span>
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
                Express Js <span className="float-end">60%</span>
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
                .NET <span className="float-end">70%</span>
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
            </div>
            <div className="col-md-6">
              <p className="text-dark fw-500 text-start mb-2">
                React JS <span className="float-end">65%</span>
              </p>
              <div className="progress progress-sm mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-dark fw-500 text-start mb-2">
                Node Js <span className="float-end">50%</span>
              </p>
              <div className="progress progress-sm mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-dark fw-500 text-start mb-2">
                Bootstrap <span className="float-end">90%</span>
              </p>
              <div className="progress progress-sm mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-dark fw-500 text-start mb-2">
                Laravel <span className="float-end">70%</span>
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
