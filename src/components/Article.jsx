import React, { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ButtonAdmin from "./ButtonAdmin";
import { AuthContext } from "../contexts/authContext";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/home, data/concept, data/abonnement, data/echanges, data/services
 * @return {*} un component article sans image affichant la data reçue, avec ternaires pour gérer la présence d'un arrière plan gris ou vert, la présence d'un bouton ou non, la présence de style citation ou non.
 */
const Article = ({ data }) => {
  const authContext = useContext(AuthContext);

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
        {authContext.token && <ButtonAdmin type="article" data={data} />}
      </div>
      <h1 className="uppercase text-h1 font-light leading-tight">
        {data.titre}
      </h1>
      <div
        className={
          data.clsCitation === 1
            ? "flex flex-col gap-3 md:w-1/2 uppercase text-[28px] font-light "
            : "flex flex-col gap-3 md:w-1/2"
        }
      >
        <p>{data.description}</p>
        <p>{data.description2}</p>
        <p>{data.description3}</p>
      </div>
      {data.bouton === 1 ? (
        <Link to={data.url}>
          <button className={btnCss} type="submit">
            En savoir plus
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Article;
