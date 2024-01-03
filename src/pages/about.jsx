import { Link } from "react-router-dom";
import a6 from "../assets/images/about/a6.jpg";
import vid from "../assets/images/about/1.mp4";
import img1 from "../assets/images/blog/blog-1.jpg";
import img2 from "../assets/images/blog/blog-2.jpg";
import img3 from "../assets/images/blog/blog-3.jpg";
import img4 from "../assets/images/blog/blog-4.jpg";
import Marquee from "react-fast-marquee";
import icon from "../assets/images/icons/icon1.png";
import icon1 from "../assets/images/icons/icon2.png";
import icon2 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";

const About = () => {
  return (
    <>
      <section className="about-wrapper p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-5">
              <h1 className=" text-white  mb-3"># Get To Know Us</h1>
              <p className="text-white fs-3">
                Take a moment to know us better...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="know-us p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <div className="col-6">
                <img src={a6} alt="" className="img-fluid p-3" />
              </div>
              <div className="col-6 d-flex flex-column text-center justify-content-center ">
                <div className="mb-3">
                  <h1>Who are We?</h1>
                </div>
                <div className="mb-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta minus deserunt temporibus adipisci accusamus minima
                    soluta, enim explicabo quisquam consequatur! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Tempore ipsum
                    veritatis praesentium doloremque aperiam totam sequi a qui
                    commodi blanditiis!
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam iste qui ratione minus aliquid, inventore non nisi
                    est? Dolores quidem maiores totam quisquam tempora id
                    nostrum quo amet eligendi odio.Tempore ipsum veritatis
                    praesentium doloremque aperiam totam sequi a qui commodi
                    blanditiis!
                  </p>
                </div>
                <div className="mt-5">
                  <Link to={"/contact"}>Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4">
                <h2 className="text-center">
                  Download our
                  <Link className="fs-2">
                    <b>App</b>
                  </Link>
                </h2>
              </div>
              <div className="col-6">
                <video loop autoPlay muted src={vid}></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-4">
              <h1>What our Customers Say</h1>
              <p>Get To know what our trusted customers say</p>
            </div>
            <div className="col-6 p-2">
              <div className=" card blog-details-page mb-3">
                <div className="d-flex">
                  <div className="col-4 ">
                    <img src={img1} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore omnis exercitationem ipsam tempora, adipisci
                      quisquam aperiam quos numquam? Veritatis, deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-2 ">
              <div className=" card  blog-details-page mb-3">
                <div className=" d-flex">
                  <div className="col-4 ">
                    <img src={img2} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore omnis exercitationem ipsam tempora, adipisci
                      quisquam aperiam quos numquam? Veritatis, deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className=" card blog-details-page mb-3">
                <div className=" d-flex">
                  <div className="col-4 ">
                    <img src={img3} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore omnis exercitationem ipsam tempora, adipisci
                      quisquam aperiam quos numquam? Veritatis, deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3">
                <div className=" d-flex">
                  <div className="col-4 ">
                    <img src={img4} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore omnis exercitationem ipsam tempora, adipisci
                      quisquam aperiam quos numquam? Veritatis, deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3">
                <div className=" d-flex">
                  <div className="col-4 ">
                    <img src={img2} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore omnis exercitationem ipsam tempora, adipisci
                      quisquam aperiam quos numquam? Veritatis, deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className=" card blog-details-page mb-3">
                <div className="d-flex">
                  <div className="col-4 ">
                    <img src={img1} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore omnis exercitationem ipsam tempora, adipisci
                      quisquam aperiam quos numquam? Veritatis, deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-3">
              <Marquee className="p-2 slide">
                <div className="card mx-3">
                  <img src={icon} alt="" className="img-fluid" />
                  <p className="card-text">Quick Orders</p>
                </div>
                <div className="card mx-3">
                  <img src={icon1} alt="" className="img-fluid" />
                  <p className="card-text">Fast Shipping</p>
                </div>
                <div className="card mx-3">
                  <img src={icon2} alt="" className="img-fluid" />
                  <p className="card-text">Huge Save</p>
                </div>
                <div className="card mx-3">
                  <img src={icon4} alt="" className="img-fluid" />
                  <p className="card-text">Online Orders</p>
                </div>
                <div className="card mx-3">
                  <img src={icon5} alt="" className="img-fluid" />
                  <p className="card-text">24/7 Support</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
