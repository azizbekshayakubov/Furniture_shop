import img1 from "../assets/images/blog/b1.jpg";
import img2 from "../assets/images/blog/b2.jpg";
import img3 from "../assets/images/blog/b3.jpg";
import img4 from "../assets/images/blog/b4.jpg";
import img5 from "../assets/images/blog/b5.jpg";

const Blog = () => {
  return (
    <>
      <section className="blog-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white mb-3">#Read More</h1>
              <p className="text-white fs-3">
                Get to know what our Trusted Customers Say...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-5">
              <h1 className="fs-2 mb-3">Explore More On Our Library</h1>
            </div>

            <div className="card  d-flex blog-details-page mb-3">
              <div className="p-4 d-flex">
                <div className="col-4 ">
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>
                <div className="card-body col-8 p-4">
                  <span>
                    <b>Marvel Clein</b>
                  </span>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore omnis exercitationem ipsam tempora, adipisci
                    quisquam aperiam quos numquam? Veritatis, deleniti. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
                    cupiditate. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto, nulla!
                  </p>
                  <div className="card-footer mt-4">
                    <p>Last updated: Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  d-flex blog-details-page mb-3">
              <div className="p-4 d-flex">
                <div className="col-4 ">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>
                <div className="card-body col-8 p-4">
                  <span>
                    <b>Marvel Clein</b>
                  </span>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore omnis exercitationem ipsam tempora, adipisci
                    quisquam aperiam quos numquam? Veritatis, deleniti. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
                    cupiditate. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto, nulla!
                  </p>
                  <div className="card-footer mt-4">
                    <p>Last updated: Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  d-flex blog-details-page mb-3">
              <div className="p-4 d-flex">
                <div className="col-4 ">
                  <img
                    src={img3}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>
                <div className="card-body col-8 p-4">
                  <span>
                    <b>Marvel Clein</b>
                  </span>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore omnis exercitationem ipsam tempora, adipisci
                    quisquam aperiam quos numquam? Veritatis, deleniti. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
                    cupiditate. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto, nulla!
                  </p>
                  <div className="card-footer mt-4">
                    <p>Last updated: Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  d-flex blog-details-page mb-3">
              <div className="p-4 d-flex">
                <div className="col-4 ">
                  <img
                    src={img4}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>
                <div className="card-body col-8 p-4">
                  <span>
                    <b>Marvel Clein</b>
                  </span>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore omnis exercitationem ipsam tempora, adipisci
                    quisquam aperiam quos numquam? Veritatis, deleniti. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
                    cupiditate. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto, nulla!
                  </p>
                  <div className="card-footer mt-4">
                    <p>Last updated: Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  d-flex blog-details-page mb-3">
              <div className="p-4 d-flex">
                <div className="col-4 ">
                  <img
                    src={img5}
                    alt=""
                    className="img-fluid img-rounded-start"
                  />
                </div>
                <div className="card-body col-8 p-4">
                  <span>
                    <b>Marvel Clein</b>
                  </span>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore omnis exercitationem ipsam tempora, adipisci
                    quisquam aperiam quos numquam? Veritatis, deleniti. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
                    cupiditate. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto, nulla!
                  </p>
                  <div className="card-footer mt-4">
                    <p>Last updated: Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
