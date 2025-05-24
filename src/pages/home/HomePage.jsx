import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <section className="hero-section d-flex align-items-center position-relative"> 
        <video
          src='/assests/images/video.mp4'
          autoPlay
          loop
          muted
          className="hero-background-video" 
        />
        <div className="container text-center position-relative z-index-1"> {/* Added z-index to content */}
          <h1 className="display-4 fw-bold text-white">Professional Deep Cleaning Services</h1>
          <p className="lead text-white mt-3">Making Your Home & Office Sparkle Again!</p>
          <a href="/contact" className="btn btn-primary btn-lg mt-4">Book Now</a>
        </div>
      </section>

      <section className="services-section py-5" style={{ backgroundColor: '#f0f8ff' }}>
  <div className="container">
    <h2 className="text-center mb-5 fw-bold text-primary">Our Services</h2>
    <div className="row g-4">
      {[
        { title: 'Home Deep Cleaning', img: '/assests/images/houseclean.jpg' },
        { title: 'Office Deep Cleaning', img: '/assests/images/office.jpg' },
        { title: 'Sofa & Carpet Cleaning', img: '/assests/images/sofa.jpg' },
        { title: 'Kitchen Deep Cleaning', img: '/assests/images/kitchen.jpg' },
        { title: 'Bathroom Sanitization', img: '/assests/images/bathroom.jpg' },
        { title: 'Move-in/Move-out Cleaning', img: '/assests/images/movein.jpg' },
      ].map((service, idx) => (
        <div key={idx} className="col-md-4">
          <div 
            className="card service-card h-100 shadow-sm border-0 rounded-4 overflow-hidden" 
            style={{ transition: '0.4s', backgroundColor: '#ffffff' }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <img 
              src={service.img} 
              className="card-img-top" 
              alt={service.title} 
              style={{ height: '220px', objectFit: 'cover' }}
            />
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h5 className="card-title fw-semibold text-dark">{service.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="why-choose-us py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row text-center">
            {[
              { title: 'Trained Professionals', desc: 'Highly skilled and background-verified cleaners.' },
              { title: 'Eco-Friendly Products', desc: 'Safe for your family, pets, and the environment.' },
              { title: 'Affordable Pricing', desc: 'Quality service at the best market rates.' },
              { title: '100% Satisfaction Guarantee', desc: 'We don’t leave until you’re fully satisfied.' },
            ].map((item, idx) => (
              <div key={idx} className="col-md-3 mb-4">
                <div className="p-4 shadow-sm h-100 bg-white rounded">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mt-3 text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta py-5">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to experience spotless spaces?</h2>
          <a href="/contact" className="btn btn-light btn-lg">Schedule Your Cleaning</a>
        </div>
      </section>
    </>
  );
};

export default HomePage;