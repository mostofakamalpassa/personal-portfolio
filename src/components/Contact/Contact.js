import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container px-lg-5">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
            Contact
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />{" "}
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2 className="mb-3 text-5 text-uppercase">Address</h2>
            <p className="text-3 mb-4">Gazipur, Sreepur,</p>
            <p className="text-3 mb-1">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone" />
              </span>
              (0088) 01818985479
            </p>

            <p className="text-3 mb-4">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              mostofakamal1990@gmail.com
            </p>
            <h2 className="mb-3 text-5 text-uppercase">Follow Me</h2>
            <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
                <li className="social-icons-facebook"><a  title="Facebook" href="https://www.facebook.com/mostofakamalpassa" target="_blank"><FaFacebook className='display-6'></FaFacebook></a></li>
                <li className="social-icons-twitter"><a  title="Github" href="https://github.com/mkpbd" target="_blank"><FaGithub className='display-6 mx-4'></FaGithub></a></li>
                <li className="social-icons-twitter"><a  title="LinkedIn" href="https://www.linkedin.com/in/mostofa-kamal-6605841b2/" target="_blank"><FaLinkedin className='display-6 mx-5'></FaLinkedin></a></li>
             
              </ul>
          </div>
          <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2 className="mb-3 text-5 text-uppercase text-center text-md-start">
              Send us a note
            </h2>
            <form id="contact-form"  method="post">
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    required=""
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required=""
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="form-message"
                    className="form-control"
                    rows={5}
                    required=""
                    placeholder="Tell us more about your needs........"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  Send Message
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
