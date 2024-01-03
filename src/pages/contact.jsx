import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import { AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-3">
              <h1>#Reach Out To Us</h1>
              <p className="text-white fs-3">
                We are Only a step away form you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info m-3 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className=" d-flex align-items-center justify-content-center">
              <div className="col-6 d-flex align-items-center">
                <map name="">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11987.579076435251!2d69.25198194999999!3d41.311152799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1703583824529!5m2!1sru!2s"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </map>
              </div>

              <div className="col-6">
                <div className="text-start mb-2">
                  <h2>Contact Information</h2>
                </div>
                <div className="footer-details">
                  <p className="mb-3">
                    <b>Address:</b> Thika town,Naltex building, 2nd floor
                  </p>
                  <p className="mb-3">
                    <b>Phone:</b>
                    <a href="tel:+998901230767">Call us +998901230767 </a>
                  </p>
                  <p className="mb-5">
                    <b>Hours Open:</b> From 8 A.m to 5 P.m
                  </p>
                  <p className="mb-3">
                    <b>Follow Us </b>
                  </p>
                  <div className="col-4 social-icons mb-3 d-flex justify-content-around">
                    <Link>
                      <AiFillTwitterCircle className="fs-4" />
                    </Link>
                    <Link>
                      <BsFacebook className="fs-4" />
                    </Link>
                    <Link>
                      <BsInstagram className="fs-4" />
                    </Link>
                    <Link>
                      <BsLinkedin className="fs-4" />
                    </Link>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  quaerat nesciunt odit at velit. Nostrum, sed praesentium
                  maiores beatae, eveniet ipsum totam et a molestias vitae animi
                  repellat quas rem at, provident nisi voluptatem quo? Dolore
                  aperiam ipsa officia molestias!quas rem at, provident nisi
                  voluptatem quo? Dolore aperiam ipsa officia molestias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="card col-8  p-5">
                <div className="text-center mb-3">
                  <h2>Send Us A Message</h2>
                </div>
                <div className="col-12 d-flex mb-3">
                  <div className="col-6 p-3">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter First Name"
                      aria-label="Enter First Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className="col-6 p-3">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter Second Name"
                      aria-label="Enter Second Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>

                <div className="p-2 mb-3">
                  <label className="mb-2">Enter Your Email Address</label>
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="basic-addon2"
                  />
                </div>

                <div className="form-floating p-2 mb-4">
                  <textarea
                    className="form-control "
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea ">
                    Type in your message
                  </label>
                </div>

                <button type="submit" className="p-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
