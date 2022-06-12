import React from 'react';
import { animated, useSpring } from '@react-spring/web'
const About = () => {
  const animate =  useSpring({
    from: { x: 0 },
    to: async animate => {
      // The `config` prop below is inherited by
      // both objects in the `to` array.
      await animate({
        to: [{ x: 100 }, { x: 0 }],
        config: { tension: 100 },
      })
    },
  })

    return (
        <>
  {/* About
    ============================================= */}
  <animated.section id="about" className="section" style={animate}>
    <div className="container px-lg-5">
      {/* Heading */}
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-24 text-dark opacity-2 text-uppercase fw-600 w-100 mb-0">
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
            I'm <span className="text-primary">Mostofa kamal,</span> a Web
            Developer
          </h2>
          <p>
          I am a Full-Stack Web Developer with industry experience building web and mobile applications. I specialize in SQL and have professional experience working with Cascading Style Sheets CSS. I'm also passionate about React Js and have made Some projects using the above technologies, some of which will be available on my Github account. When I'm not working, you can find me doing something creative or playing around with Photoshop
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
                <span className="fw-600 me-2">Name:</span>Mostofa kamal
              </li>
              <li className="">
                <span className="fw-600 me-2">Email:</span>
                <a href="mailto:mostofakamal1990@gmail.com">mostofakamal1990@gmail.com</a>
              </li>
              <li className="">
                <span className="fw-600 me-2">Age:</span>32
              </li>
              <li className="border-0">
                <span className="fw-600 me-2">From:</span>Gazipur, Dhaka,
                Bangladesh
              </li>
            </ul>
            <a href="/assets/Resume_mostofa_kamal.pdf" target="_blank" className="btn btn-primary rounded-pill">
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
                <span className="counter" data-from={0} data-to={3}>
                  3
                </span>
                +
              </h4>
              <p className="mb-0">Years Experience</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={5}>
                  5
                </span>
                +
              </h4>
              <p className="mb-0">Happy Clients</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={10}>
                  10
                </span>
                +
              </h4>
              <p className="mb-0">Projects Done</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="featured-box text-center">
              <h4 className="text-12 text-muted mb-0">
                <span className="counter" data-from={0} data-to={1}>
                  1
                </span>
              </h4>
              <p className="mb-0">Get Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </animated.section>
  {/* About end */}
</>

    );
};

export default About;