import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Concept
 * un component article avec incrustation d'une image
 * bouton admin joint
 * @return {*}
 */
const ArticleImage = ({ data }) => {
  let css = "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 ";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";
  return (
    <div className="">
      <div
        className={css}
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="articleImage" data={data} />
        </div>
        <h1 className="uppercase text-h1 font-light">{data.titre}</h1>
        <img className="w-32" src={data.src} alt={data.alt} />
        <p className="md:w-1/2">{data.description}</p>
      </div>
    </div>
  );
};

export default ArticleImage;
