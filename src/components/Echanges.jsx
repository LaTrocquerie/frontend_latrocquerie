import React, { useContext } from "react";
import ButtonAdmin from "./ButtonAdmin";
import { AuthContext } from "../contexts/authContext";
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
  const authContext = useContext(AuthContext);

  let css =
    "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";
  return (
    // composant categorie
    <div
      className={css}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        {authContext.token && <ButtonAdmin type="echanges" data={data} />}
      </div>
      <div className="md:w-1/2">
        <p className="">{data.description}</p>
        <h2 className="text-center mt-4">{data.titre}</h2>
        <section className="flex justify-center gap-4 mt-4">
          {data.details.map((gommette) => (
            <section key={gommette.id_gommettes}>
              <div>
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
