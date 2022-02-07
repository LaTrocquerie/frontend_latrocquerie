import React, { useContext } from "react";
import ButtonAdmin from "./ButtonAdmin";
import { AuthContext } from "../contexts/authContext";

/**
 *
 *
 * @param {*} { data }
 *  * Data se trouvant dans data/echanges
 * @return {*} Composant objets qui regroupe chaque objets présentés à la Trocquerie classés par catégorie via un map
 * Bouton d'admin joint
 */
const Objets = ({ data }) => {
  const authContext = useContext(AuthContext);

  let css = "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 ";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";
  return (
    <div
      className={css}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        {authContext.token && <ButtonAdmin type="objets" data={data} />}
      </div>
      {data.details.map((cat) => (
        <section className="md:w-1/2" key={cat.appartenance}>
          <h1 className="uppercase font-bold text-h2">{cat.appartenance}</h1>
          <p>{cat.cible}</p>
        </section>
      ))}
    </div>
  );
};
// composant qui categorise les objets sur la page Echanges
export default Objets;
