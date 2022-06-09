import React from "react";
import TypeAnimation from "react-type-animation";
const Home = () => {
  return (
    <>
      <section id="home">
        <div className="hero-wrap">
          <div className="hero-mask opacity-8 bg-dark" />
          <div
            className="hero-bg parallax"
            style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
          />
          <div className="hero-content section d-flex fullscreen">
            <div className="container my-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="text-light fwn-bold">
                    <TypeAnimation
                      cursor={true}
                      sequence={[
                        "I'm Mostofa kamal",
                        2000,
                        "I'm a Frontend Developer",
                        2000,
                        "I'm a ReactJs Developer",
                        2000,
                      ]}
                      wrapper="h1"
                      repeat={Infinity}
                    />
                  </div>
                  <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                    Welcome
                  </p>
                  <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                    <span className="typed" />
                  </h2>
                  <p className="text-5 text-light mb-4">based In the World.</p>
                  <a
                    href="/assets/Resume_mostofa_kamal_.pdf"
                    target="_blank"
                    className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  >
                    Download CV
                  </a>

                  <div className="my-3">
                    <a
                      href="#contact"
                      className="btn  btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#about"
              className="scroll-down-arrow text-white smooth-scroll"
            >
              <span className="animated">
                <i className="fa fa-chevron-down" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
