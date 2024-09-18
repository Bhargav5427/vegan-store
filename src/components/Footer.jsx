import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Vegan Store</title>
        <meta
          name="description"
          content="Get in touch with us at Vegan Store. Find our contact details and address information for our London and Berlin stores."
        />
        <meta
          name="keywords"
          content="contact, vegan store, London store, Berlin store, customer support"
        />
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-between",
        }}
      >
        <section id="contact-section">
          <article id="address-section">
            <p className="contact-essential-heading">Contact Us</p>
            <h3>Address Information</h3>
            <p id="contact-attractions">
              Overeating is one of the most common causes of overweight and
              digestive problems.
            </p>
            <h4>London Store</h4>
            Building E<br />
            6th floor London
            <br />
            Monday to Friday : 9am to 8pm
            <br />
            examplemail@mail.com
            <h4>Berlin Store</h4>
            Building E<br />
            6th floor London
            <br />
            Monday to Friday : 9am to 8pm
            <br />
            examplemail@mail.com
          </article>
          <aside id="get-in-touch-section">
            <p className="contact-essential-heading">Meet Our Team</p>
            <h3>Get In Touch</h3>
            <p id="contact-attractions">
              The task of proper nutrition - to remove from the diet harmful
              food and enrich it useful.
            </p>
            <input type="text" name="username" placeholder="Name" />
            <input type="number" name="phone" placeholder="Phone" />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="email" name="email" placeholder="E-mail" />
            <textarea name="message" placeholder="Message"></textarea>
            <div id="second-secondary-btn-container">
              <button id="second-secondary-btn">SUBMIT NOW</button>
            </div>
          </aside>
        </section>
        <footer id="footer-bottom">
          © Copyright 2020 infiniteGODS - All Rights Reserved.
        </footer>
      </div>
    </>
  );
};

export default Footer;
