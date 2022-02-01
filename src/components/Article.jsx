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

  let bgCss = "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 ";
  bgCss += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";

  let btnCss =
    "transition active:-skew-y-6 active:translate-y-1  px-6 py-2 shadow-[10px_10px_0px_0px] hover:bg-rose hover:text-vert bg-vert text-white ";
  btnCss +=
    data.cls === 1
      ? "active:shadow-vert/40 shadow-vert/50"
      : "hover:border-rose shadow-blanc/30 active:shadow-blanc/20 border-blanc border-2";

  return (
    <div
      className={bgCss}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="article" data={data} />
      </div>
      <h1 className="uppercase text-h1 font-light leading-tight">
        {data.titre}
      </h1>
      <div
        className={
          data.clsCitation === 1
            ? "md:w-1/2 uppercase text-[28px] font-light "
            : "md:w-1/2"
        }
      >
        <p className="">{data.description}</p>
        <p className="">{data.description2}</p>
        <p className="">{data.description3}</p>
      </div>
      {data.bouton === 1 ? (
        <a href={data.url}>
          <button className={btnCss} type="submit">
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
