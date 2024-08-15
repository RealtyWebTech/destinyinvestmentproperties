"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";

const page = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_lug9w1g";
    const templateId = "template_9u366cf";
    const publicKey = "1W_eKa0bKaqGdBJiM";

    console.log(serviceId, templateId, publicKey, form.current);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        e.target.reset();
        setButtonText("Success");
        setIsLoading(false);
        e.target.reset();

        setTimeout(() => {
          setButtonText("Send Message");
        }, 3000);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <ThrownLayout>
      <PageBanner pageName={"Contact"} />
      {/*==================================================*/}
      {/* Start Thrown Pricing Area */}
      {/*==================================================*/}
      <div className="contact-inner-page">
        <div className="container">
          <div className="row inner mb-150">
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box">
                <div className="contact-inner-icon">
                  <i className="bi bi-telephone-x" />
                </div>
                <div className="contact-content">
                  <h4>Phone Number</h4>
                  <span>+44 7780453714</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box">
                <div className="contact-inner-icon">
                  <i className="bi bi-envelope-open" />
                </div>
                <div className="contact-content">
                  <h4>E-mail</h4>
                  <span>customer@destinyinvestmentproperties.co.uk</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box two">
                <div className="contact-inner-icon">
                  <i className="bi bi-geo-alt" />
                </div>
                <div className="contact-content">
                  <h4>Address</h4>
                  <span>Flat 1, 170 Woodcote Road Wallington</span>
                  <span>SM6 0PA London</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="contact-box inner">
              <div className="contact-title">
                <h2>Have be any question?</h2>
                <h2>feel free to Contact</h2>
              </div>
              <form ref={form} onSubmit={sendEmail} method="POST" id="it-form">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input
                        required
                        type="text"
                        name="from_name"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="name" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input
                        required
                        type="text"
                        name="from_phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input
                        required
                        type="text"
                        name="from_email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="from_website"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-box">
                      <textarea
                        required
                        name="message"
                        id="massage"
                        cols={30}
                        rows={10}
                        placeholder="Comment"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-box-button inner">
                      <button value={"send"} type="submit">
                        {isLoading ? "Sending..." : buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div id="status" />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Pricing Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Map Area */}
      {/*==================================================*/}
      <div className="map-area">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1719746285540!5m2!1sen!2sin"
                width={1920}
                height={608}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Map Area */}
      {/*==================================================*/}
      {/* <BrandSlider /> */}
    </ThrownLayout>
  );
};
export default page;
