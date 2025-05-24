import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";
import { Link } from "react-router-dom";

const categories = ["house", "room", "sofa"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("house");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchServices = async (category) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:7001/api/auth/services/${category}`
      );

      if (Array.isArray(response.data)) {
        setServices(response.data);
      } else if (
        response.data.services &&
        Array.isArray(response.data.services)
      ) {
        setServices(response.data.services);
      } else {
        setServices([]);
        setError("Unexpected API response format");
      }
    } catch (err) {
      setError("Failed to fetch services");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container services-container">
      <h1 className="services-title">Company Rate Card</h1>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading, Error or No Data */}
      {loading ? (
        <p className="text-center text-xl text-gray-500 animate-pulse">
          Loading services...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 font-semibold text-lg">
          {error}
        </p>
      ) : services.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-5">
          No services found for{" "}
          <span className="font-semibold">{selectedCategory}</span>
        </p>
      ) : (
        <div className="services-grid">
          {services.map((service) => (
            <div key={service._id || Math.random()} className="service-card">
              {/* <img
                src="https://via.placeholder.com/400x200?text=Service+Image"
                alt={service.service || service.type || "Service"}
                className="service-image"
              /> */}

              <div className="service-content">
                <h2 className="service-title">
                  {service.service || service.type || "Untitled Service"}
                </h2>

                <p className="service-description">
                  {service.description || "No description available."}
                </p>

                {selectedCategory === "house" ? (
                  <div className="rate-section">
                    <p>
                      <strong>Furnished: </strong>₹{service.furnished ?? "N/A"}
                    </p>
                    <p>
                      <strong>Unfurnished: </strong>₹
                      {service.unfurnished ?? "N/A"}
                    </p>
                  </div>
                ) : (
                  <div className="rate-section">
                    <p>
                      <strong>Price: </strong>₹{service.price ?? "N/A"}
                    </p>
                  </div>
                )}

                <Link to="/contact" className="btn btn-primary mt-3">
                   Book Service
                </Link>
                {/* <button>Get Quote</button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
