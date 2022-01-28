import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * Data se trouvant dans data/echanges
 * @return {*} Le composant regroupant les produits que présentent la Trocquerie
 *  * Bouton d'admin joint
 */
const Product = ({ data }) => {
  // composant product se trouvant sur la page Echanges
  return (
    <div
      className={data.cls}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="product" data={data} />
      </div>
      <h1 className="uppercase text-center font-light text-h1">{data.titre}</h1>
      <section className="md:w-1/2 flex flex-col gap-3 mt-10">
        {data.details.map((pres) => (
          <div className=" flex justify-center gap-3 my-2 flex-col md:flex-row">
            <p className=" md:pr-4">{pres.infos}</p>
            <img
              src={pres.src}
              alt={pres.alt}
              className="mx-auto my-2 w-72 md:w-52"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
