import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 *  * Data se trouvant dans data/echanges
 * @return {*} Composant objets qui regroupe chaque objets présentés à la Trocquerie classés par catégorie via un map
 * Bouton d'admin joint
 */
const Objets = ({ data }) => {
  return (
    <div
      className={data.cls}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="objets" data={data} />
      </div>
      {data.details.map((cat) => (
        <section className="md:w-1/2">
          <h1 className="uppercase font-bold text-h2">{cat.appartenance}</h1>
          <p>{cat.cible}</p>
        </section>
      ))}
    </div>
  );
};
// composant qui categorise les objets sur la page Echanges
export default Objets;
