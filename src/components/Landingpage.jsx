import React from "react";
import { Helmet } from "react-helmet";

const Landingpage = () => {
  return (
    <>
      <Helmet>
        <title>Vegan Store - Fresh Food for Healthy Living</title>
        <meta
          name="description"
          content="Discover the best vegan store with fresh food, vegetables, and products that support healthy living and proper nutrition."
        />
        <meta
          name="keywords"
          content="vegan store, fresh food, healthy living, organic, vegan products"
        />
      </Helmet>
      <section id="landing-section">
        <h1 id="heading">Vegan Store Simple Website Template</h1>
        <p id="description">
          With nutrition, all the vital functions of the body are connected. It
          is the source of the development of tissues and cells, their constant
          renewal, the saturation of man with energy.
        </p>
      </section>
    </>
  );
};

export default Landingpage;
