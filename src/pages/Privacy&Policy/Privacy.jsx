import React from 'react';
import './Privacy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container container py-5">
            <h2 className="text-center mb-5">Privacy Policy</h2>
            <p>At Deep Cleaning Services, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services.</p>
            <h4>Information We Collect</h4>
            <ul>
                <li>Personal Information: Name, email address, phone number, and address.</li>
                <li>Service Information: Details about the type of cleaning service you require.</li>
                <li>Communication: Messages and additional details you provide through our contact form.</li>
            </ul>
            <h4>How We Use Your Information</h4>
            <ul>
                <li>To respond to your inquiries and provide the requested services.</li>
                <li>To improve our services based on your feedback.</li>
                <li>To send important updates regarding your service requests.</li>
            </ul>
            <h4>Data Security</h4>
            <p>We use appropriate security measures to protect your data from unauthorized access, disclosure, or misuse.</p>
            <h4>Third-Party Sharing</h4>
            <p>We do not share your personal information with third parties without your consent, except as required by law.</p>
            <h4>Contact Us</h4>
            <p>If you have any questions about our Privacy Policy, please contact us through the form provided on our website.</p>
            <p className="text-muted">Last updated: May 2025</p>
        </div>
    );
};

export default PrivacyPolicy;
