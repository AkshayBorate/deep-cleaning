import React, { useState } from "react";
import "./Blogs.css";

const blogs = [
  {
    title: "Top 5 Benefits of Deep Cleaning",
    image:
      "https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/f2153d13-6004-4f1b-bad5-0575e1522f36/benefits+of+deep+cleaning.png?format=1000w",
    description:
      "Deep cleaning can transform your home or office, improving health and well-being. Discover the top 5 benefits of deep cleaning.",
  },
  {
    title: "How to Choose the Right Cleaning Service",
    image:
      "https://www.shutterstock.com/image-photo/portrait-happy-male-female-janitors-600nw-1153862407.jpg",
    description:
      "Choosing the right cleaning service can be tricky.To choose the right cleaning service, assess your needs, research providers, compare quotes, and check for certifications, insurance, and references.",
  },
  {
    title: "Why Regular Deep Cleaning is Important",
    image:
      "https://images.squarespace-cdn.com/content/v1/5fd3d1865f4f391288e896f7/f2a890d0-4e8c-4040-9a40-c436a483acf4/Everything+You+Need+To+Know+About+Deep+House+Cleaning.png",
    description:
      "Regular deep cleaning is essential for maintaining a healthy environment. Learn why it matters for your home and workplace.",
  },
  {
    title: "Best Cleaning Hacks for a Sparkling Home",
    image:
      "https://www.longislandmaids.com/wp-content/uploads/2023/01/d5ef73b3-1cc1-431b-9448-93ffe073f252-1318170223-scaled.jpg",
    description:
      "Discover some of the best cleaning hacks to keep your home looking spotless and fresh all year round.",
  },
  {
    title: "How to Prepare for a Professional Deep Clean",
    image:
      "https://www.pristinehome.com.au/wp-content/uploads/2018/12/How-to-Prepare-Your-House-for-Professional-Cleaning.jpg",
    description:
      "Getting ready for a professional deep clean? Here are some tips to make the most of your service.",
  },
  {
    title: "Top 10 Myths About Deep Cleaning",
    image:
      "https://kingscleaningco.com.au/cdn/shop/articles/DALL_E_2024-02-15_15.48.54_-_Create_an_engaging_and_visually_balanced_header_image_for_a_cleaning_website_s_blog_post_titled_Myth_vs_Reality__Debunking_Top_10_Cleaning_Myths._Th.webp?v=1707973361",
    description:
      "Debunking the most common myths about deep cleaning to help you make informed decisions.",
  },
];

const faqs = [
  {
    question: "What is deep cleaning and why is it important?",
    answer:
      "Deep cleaning involves thorough cleaning of all surfaces and hard-to-reach areas to eliminate dust, allergens, and germs, improving health and hygiene.",
  },
  {
    question: "How often should I schedule a deep cleaning?",
    answer:
      "It depends on your lifestyle, but typically every 3-6 months is recommended to maintain a healthy environment.",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer:
      "Yes, we use eco-friendly, non-toxic cleaning products that are safe for your whole family, including pets.",
  },
  {
    question: "Do I need to be home during the cleaning service?",
    answer:
      "Not necessarily. You can provide instructions and we will ensure everything is cleaned professionally while you’re away.",
  },
  {
    question: "Can I customize my cleaning plan?",
    answer:
      "Absolutely! We tailor our services to meet your specific needs and preferences for your home or office.",
  },
];

const BlogsComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="blogs-container container py-5">
      <h2 className="text-center mb-5">Latest Blogs</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top rounded-top-4"
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section mt-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
              }}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-toggle-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
