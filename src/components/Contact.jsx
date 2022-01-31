import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * @return {*} les différents moyens de contact, n° de tel, reseaux sociaux, mail etc
 * Bouton admin joint
 */
const Contact = ({ data }) => {
  return (
    <div>
      <div
        className="p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc"
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="contact" data={data} />
        </div>
        <h1 className="uppercase text-center text-h1 font-light">
          {data.titre}
        </h1>
        <p className="font-light">{data.nom}</p>
        <div className="flex justify-between flex-col md:flex-row bg-gris_clair rounded text-vert py-2 pr-4">
          <div className="flex pl-4">
            <img
              className="mr-1 w-6"
              src={data.srcPhoneIcon}
              alt="phone icon"
            />
            <p>{data.telephone}</p>
          </div>
          <div className="flex pl-4">
            <img className="mr-1 w-6" src={data.srcMailIcon} alt="mail icon" />
            <p>{data.mail}</p>
          </div>
          {/* Appelle de chaque reseau individuellement avec l'index */}
          <div className="flex pl-4 h-auto flex-row justify-center">
            <a href={data.reseaux[0].url} target="_blank" rel="noreferrer">
              <img
                className="transition hover:bg-rose rounded active:translate-y-1"
                src={data.reseaux[0].src}
                alt={data.reseaux[0].alt}
              />
            </a>
            <a href={data.reseaux[1].url} target="_blank" rel="noreferrer">
              <img
                className="transition hover:bg-rose rounded active:translate-y-1"
                src={data.reseaux[1].src}
                alt={data.reseaux[1].alt}
              />
            </a>
            <a href={data.reseaux[2].url} target="_blank" rel="noreferrer">
              <img
                className="transition hover:bg-rose rounded active:translate-y-1"
                src={data.reseaux[2].src}
                alt={data.reseaux[2].alt}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
