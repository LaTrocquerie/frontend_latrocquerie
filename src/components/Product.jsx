import React, { useContext } from "react";
import ButtonAdmin from "./ButtonAdmin";
import { AuthContext } from "../contexts/authContext";

/**
 *
 *
 * @param {*} { data }
 * Data se trouvant dans data/echanges
 * @return {*} Le composant regroupant les produits que présentent la Trocquerie
 *  * Bouton d'admin joint
 */
const Product = ({ data }) => {
  const authContext = useContext(AuthContext);

  let css =
    "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 bg-vert text-blanc";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";
  // composant product se trouvant sur la page Echanges
  return (
    <div
      className={css}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        {authContext.token && <ButtonAdmin type="product" data={data} />}
      </div>
      <h1 className="uppercase text-center font-light text-h1">{data.titre}</h1>
      <section className="md:w-1/2 flex flex-col gap-3 mt-10">
        {data.details.map((pres) => (
          <div
            className=" flex justify-center gap-3 my-2 flex-col md:flex-row"
            key={pres.src}
          >
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
