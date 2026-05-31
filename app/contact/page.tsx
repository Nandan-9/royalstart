export default function ContactPage() {
  return (
    <div className="page-wrapper">

      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <ul className="bread-crumb clearfix">
            <li><a href="/">Home</a></li>
            <li>Contact Us</li>
          </ul>
          <h2>Contact Us</h2>
        </div>
      </section>

      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="auto-container">
          <div className="sec-title-three centered">
            <h2>Office Near You.</h2>
          </div>
          <div className="row clearfix">
            <div className="location-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="content">
                  <span className="icon flaticon-message"></span>
                  <strong>Email Address</strong>
                  Sent mail asap anytime
                </div>
                royalstarcrusheruae@gmail.com<br />
              </div>
            </div>
            <div className="location-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="content">
                  <span className="icon flaticon-call"></span>
                  <strong>Phone Number</strong>
                  call us asap anytime
                </div>
                +971 92773860<br />
                +971 58 173 2977
              </div>
            </div>
            <div className="location-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="content">
                  <span className="icon flaticon-home"></span>
                  <strong>Office Address</strong>
                  Sent mail asap anytime
                </div>
                P/O/ BOX: 1249, AL-HAIL FUJAIRAH, UNITED ARAB EMIRATES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="map-outer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.8543684684646!2d56.3014348745629!3d25.106790635358156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f9ee0fabf857%3A0x11cc25fc17a8b94c!2sRoyal%20Star%20Crusher!5e0!3m2!1sen!2sin!4v1686289371578!5m2!1sen!2sin"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Star Crusher Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="pattern-layer"></div>
        <div className="auto-container">
          <div className="sec-title alternate centered">
            <div className="title">Submit Question</div>
            <h2>Needs Help? Let&apos;s Get in Touch</h2>
          </div>
          <div className="inner-container">
            <div className="contact-form">
              <form method="post" action="" id="contact-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="username" placeholder="Name" required />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="phone" placeholder="Your Phone" required />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="subject" placeholder="Your Subject" required />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <button className="theme-btn btn-style-eight clearfix">
                      <span className="btn-wrap">
                        <span className="text-one">Send Message</span>
                        <span className="text-two">Send Message</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
