import React from "react";
import ButtonAdmin from "./ButtonAdmin";
import "../effects.css";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Echanges
 * @return {*}
 * Map sur les gommettes pour classer les produits par categorie de prix
 * bouton Admin joint
 */
const Echanges = ({ data }) => {
  return (
    // composant categorie
    <div
      className={data.cls}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="echanges" data={data} />
      </div>
      <div className="md:w-1/2">
        <p className="">{data.description}</p>
        <h2 className="text-center mt-4">{data.titre}</h2>
        <section className="flex justify-center gap-4 mt-4">
          {data.details.map((gommette) => (
            <section>
              <div key={gommette.id}>
                <img
                  className="blob w-16 h-16"
                  src={gommette.src}
                  alt={gommette.alt}
                />
              </div>
            </section>
          ))}
        </section>
        <div className="p-4">
          <p className="text-center">{data.infos}</p>
          <p className="text-xs text-center mt-7">{data.more}</p>
        </div>
      </div>
    </div>
  );
};

export default Echanges;
