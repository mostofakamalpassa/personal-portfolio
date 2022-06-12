import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


const Contact = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(data);

    if(data?.email || data.message || data.name){
      emailjs.send('service_m6me5n8','template_2naqll3', data, 'eLBIxzJ4VUJ7NEJQ9')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         toast.success( "Your Message has been send now")
      }, (err) => {
        toast.success( err)
      });
    }

   


    console.log("Errors", errors)
  } 
  return (
    <section id="contact" className="section bg-light">
      <div className="container px-lg-5">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-dark opacity-2 text-uppercase fw-600 w-100 mb-0">
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
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    {...register('name',{required:true})}
                    type="text"
                    className="form-control"
                    required=""
                    placeholder="Name"
                  />
                   {errors?.name?.type === 'required' && <p className='text-danger'>Name is required</p>}
                </div>
               
                <div className="col-xl-6">
                  <input
                   {...register('email',{required:true})}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                    {errors?.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                </div>
                <div className="col">
                  <textarea
                    {...register('message',{required:true})}
                    className="form-control"
                    rows={5}
                    required=""
                    placeholder="Tell us more about your needs........"
                    defaultValue={""}
                  />
                   {errors?.message?.type === 'required' && <p className="text-danger">Message is required</p>}
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
