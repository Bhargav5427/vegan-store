import React from "react";
import { Helmet } from "react-helmet";

const Testimonial = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials - What Our Customers Say</title>
        <meta
          name="description"
          content="Read what our satisfied customers have to say about our vegan store, fresh products, and exceptional customer service."
        />
        <meta
          name="keywords"
          content="testimonials, customer reviews, vegan store, fresh food, organic products"
        />
      </Helmet>
      <section
        id="testimonial-section"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "83vh",
          justifyContent: "center",
        }}
      >
        <p className="fresh-food">Fresh Food</p>
        <h3>Our Vegan Shop!</h3>
        <p className="store-description">
          According to experts, any habit can be formed in 21 days. The same
          statement applies to healthy eating.
        </p>
        <div>
          <article className="testimonial">
            <img
              src="https://mobirise.com/extensions/organicamp/assets/images/face5.jpg"
              alt="testimonial 1"
            />
            <p className="testimonial-review">
              Sales consultants are very polite. Many of the products have tried
              and are ready to prompt and recommend to customers. The staff
              shows that they completely share the philosophy of proper
              nutrition, if you can say so.
            </p>
            <h3 className="testimonial-from">VERONICA KING</h3>
            <p className="job">Cook</p>
          </article>
          <article className="testimonial">
            <img
              src="https://mobirise.com/extensions/organicamp/assets/images/face6.jpg"
              alt="testimonial 2"
            />
            <p className="testimonial-review">
              The assortment is very wide. From useful organic oils, cereals and
              teas to specific products for vegetarians, such as sausages and
              pies without meat.
            </p>
            <h3 className="testimonial-from">JIM CASH</h3>
            <p className="job">Seller</p>
          </article>
          <article className="testimonial">
            <img
              src="https://mobirise.com/extensions/organicamp/assets/images/face7.jpg"
              alt="testimonial 3"
            />
            <p className="testimonial-review">
              I want to say a huge thank you to the management of the store and
              all its employees, I'm not a vegetarian, it would seem that the
              store is not for me, but it's not so, any person who comes here
              will find something useful.
            </p>
            <h3 className="testimonial-from">PETER GOODMAN</h3>
            <p className="job">Master Cook</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
