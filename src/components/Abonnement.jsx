import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Abonnement
 * Map sur les différents abonnements
 * Bouton admin joint
 * @return {*}
 */
const Abonnement = ({ data }) => {
  let css = "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 ";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";
  return (
    <div>
      <div
        className={css}
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="abonnement" data={data} />
        </div>
        <h1 className="uppercase font-light text-h1">{data.titre}</h1>
        <br />
        <br />
        <div className="md:w-1/2">
          {data.details.map((detail) => (
            <p className="uppercase font-bold text-h2">
              {detail.detail}
              <p className="normal-case font-regular text-normal">
                {detail.description1}
              </p>
              <p className="normal-case font-regular text-normal">
                {detail.description2}
              </p>
              <br />
            </p>
          ))}
          <p className="normal-case text-mini font-regular">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abonnement;
