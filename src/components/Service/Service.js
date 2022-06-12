import React from 'react';
import {FaPalette} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa'
import {FaDatabase} from 'react-icons/fa'
import {MdSdStorage} from 'react-icons/md'
import {MdOutlineWeb} from 'react-icons/md'
import { animated, useSpring } from '@react-spring/web'
const Service = () => {
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
        {/* Services
          ============================================= */}
        <animated.section id="services" className="section bg-light" style={animate}>
          <div className="container px-lg-5">
            {/* Heading */}
            <div className="position-relative d-flex text-center mb-5">
              <h2 className="text-24 text-dark opacity-2 text-uppercase fw-600 w-100 mb-0">
                Services
              </h2>
              <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
                What I Do?
                <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />{" "}
              </p>
            </div>
            {/* Heading end*/}
            <div className="row">
              <div className="col-lg-11 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="featured-box style-3 mb-5">
                      <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                        <MdOutlineWeb></MdOutlineWeb>
                      </div>
                      <h3>Front-End Developer</h3>
                      <p className="mb-0">
                     I am front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript  users to access and interact with the site or app
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="featured-box style-3 mb-5">
                      <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                      <FaDesktop></FaDesktop>
                      </div>
                      <h3>Web Design</h3>
                      <p className="mb-0">
                      Design any type Web Structure to build an unique design for website. like pixel perfect Design using Bootstrap grid or  tailwind grid
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="featured-box style-3 mb-5">
                      <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                      <MdSdStorage></MdSdStorage>
                      </div>
                      <h3>Back-End Developer</h3>
                      <p className="mb-0">
                      Web development activities that are done at the back end of programs are referred to as back end development. Back-end development covers server-side web application logic and integration and activities. I am using Backend Development tools  Express JS, Node Js, Laravel, .NET Core
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="featured-box style-3 mb-5">
                      <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                      <FaDatabase></FaDatabase>
                      
                      </div>
                      <h3>Database Management</h3>
                      <p className="mb-0">
                      A database management system (or DBMS) is essentially nothing more than a computerized data-keeping system, I am using some tools for database structure  UMD system or Entity Relationship Diagram, also known as ERD, ER Diagram or ER model, is a type of structural diagram for use in database design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.section>
        {/* Services end */}
      </>
      
    );
};

export default Service;