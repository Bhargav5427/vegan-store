import React from "react";
import { Helmet } from "react-helmet";

const AboutStore = () => {
  return (
    <>
      <Helmet>
        <title>About Our Vegan Store - High Quality Fresh Vegetables</title>
        <meta
          name="description"
          content="Learn more about our vegan store, offering fresh vegetables, high-quality products, and the best prices."
        />
        <meta
          name="keywords"
          content="vegan store, fresh vegetables, high quality, best price, organic products"
        />
      </Helmet>
      <section id="about-store-section" style={{ height: "100vh" }}>
        <p className="fresh-food">Fresh Food</p>
        <h3>Our Vegan Store!</h3>
        <p id="store-desc" className="store-description">
          Radish contains a lot of fiber, pectin, and mineral salts.
        </p>
        <div>
          <article className="store-items-container">
            <i className="fa fa-camera"></i>
            <h3 className="store-item-name">Fresh Vegetables</h3>
            <p className="store-description">
              Use for cooking several types of vegetable oil.
            </p>
          </article>
          <article className="store-items-container">
            <i className="fa fa-rocket"></i>
            <h3 className="store-item-name">High Quality</h3>
            <p className="store-description">
              This is the best source of essential fatty acids for the body.
            </p>
          </article>
          <article className="store-items-container">
            <i className="fab fa-twitter"></i>
            <h3 className="store-item-name">Sale</h3>
            <p className="store-description">
              It is very good, if in the kitchen there will always be several
              bottles with different oils.
            </p>
          </article>
          <article className="store-items-container">
            <i className="fab fa-weixin"></i>
            <h3 className="store-item-name">Best Price</h3>
            <p className="store-description">
              Remember that unrefined oils are not suitable for heat treatment.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutStore;
