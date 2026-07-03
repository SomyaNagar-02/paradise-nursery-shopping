import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-content">
        <h1>About Paradise Nursery</h1>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded in 2015 with a simple mission: to bring the beauty and serenity of nature into homes and offices around the world. What started as a small local nursery has grown into a thriving online plant shop serving thousands of customers.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe that plants have the power to transform spaces and improve lives. Our mission is to provide high-quality, healthy houseplants with expert care instructions to help every customer succeed in their plant parenting journey.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Quality:</strong> We source our plants from reputable growers and ensure each plant is healthy before shipping.</li>
            <li><strong>Variety:</strong> From low-maintenance succulents to sophisticated tropical plants, we have options for every skill level.</li>
            <li><strong>Expert Care:</strong> Each plant comes with detailed care instructions and our team is always available for advice.</li>
            <li><strong>Fast Shipping:</strong> We package plants securely for safe delivery to your doorstep.</li>
            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our guarantee. We stand behind every plant we sell.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to sustainability and eco-friendly practices. All our packaging is recyclable, and we partner with environmental organizations to offset our carbon footprint. Every purchase helps us plant trees and support conservation efforts.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:info@paradisenursery.com">info@paradisenursery.com</a><br />
            Phone: 1-800-PLANTS-1<br />
            Address: 123 Garden Lane, Green Valley, CA 94000
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
