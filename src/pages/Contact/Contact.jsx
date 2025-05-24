import React, { useState } from "react";
// import './styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  // ✅ This function was missing in your version
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:7001/api/auth/add/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        });
      } else {
        alert(`Submission failed: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="contact-container container py-5">
      <div className="row">
        <h2 className="text-center mb-5">
          Deep Cleaning Services Contact Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form p-4 shadow-lg rounded-4"
        >
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="form-label">
              Service Type
            </label>
            <select
              className="form-select"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service type</option>
              <option value="home">Home Cleaning</option>
              <option value="office">Office Cleaning</option>
              <option value="carpet">Carpet Cleaning</option>
              <option value="post-renovation">Post-Renovation Cleaning</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Additional Details
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any additional details"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
