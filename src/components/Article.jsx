import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Echanges
 * @return {*} un component article sans image avec un ternaire pour afficher ou non les différentes description et bouton
 */
const Article = ({ data, component }) => {
  console.log(data);
  console.log(component);

  let css = "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 ";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";

  return (
    <div
      className={css}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="article" data={data} />
      </div>
      <h1 className="uppercase text-h1 font-light leading-tight">
        {data.titre}
      </h1>
      <p className="md:w-1/2">{data.description}</p>
      <p className="md:w-1/2">{data.description2}</p>
      <p className="md:w-1/2">{data.description3}</p>

      {data.bouton === 1 ? (
        <a href={data.url}>
          <button
            className={
              data.clsBouton === 1
                ? "transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 "
                : "transition hover:bg-rose hover:text-vert hover:border-rose active:-skew-y-6 active:translate-y-1 shadow-blanc/30 shadow-[10px_10px_0px_0px] active:shadow-blanc/20 bg-vert border-blanc border-2 text-blanc px-6 py-2 text-normal mt-5"
            }
            type="submit"
          >
            En savoir plus
          </button>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Article;

// composant article se retrouvant sur la page des Echanges
