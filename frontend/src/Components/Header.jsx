import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                A law firm <br />
                with a passion for success.
              </h1>
              <p className="main-hero-para">
                Are you in need of professional legal assistance? Look no
                further than LegalConnect, the ultimate app designed to connect
                users with qualified lawyers for all their legal needs. With
                LegalConnect, finding the right lawyer is now faster, easier,
                and more convenient than ever before.
              </p>
              <div className="button-div-redirect">
              <button type="button" class="btn btn-outline-primary">
                Book An Appointment
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Meet Our Lawyers
              </button>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="https://blog.ipleaders.in/wp-content/uploads/2021/10/CorporateLawFirminmumbai.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YKlUXHAtEJkF8PWBPEbUZkOt-FbvlbXeVw"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
