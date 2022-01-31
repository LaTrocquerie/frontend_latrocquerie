import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import FooterData from "../data/FooterData";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @return {*}
 * data se trouvant dans data/FooterData
 * Map sur les horaires
 * Bouton Admin joint
 */
const Footer = () => {
  return (
    <div className={FooterData.cls}>
      <div className="flex justify-end pr-4 pt-4">
        <ButtonAdmin type="footer" />
      </div>
      <div className="py-4 flex flex-col items-center md:flex-row md:flex-wrap md:gap-0 text-center text-vert gap-5">
        <div className="md:order-1 md:basis-1/3 list-none">
          <h2 className="text-h2 font-bold">{FooterData.titreContact}</h2>
          <li>{FooterData.contact[0].mail}</li>
          <li>{FooterData.contact[1].phone}</li>
        </div>
        <div className="md:order-3 md:basis-1/3 list-none">
          <h2 className="text-h2 font-bold">{FooterData.titreHoraires}</h2>
          {FooterData.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <p className="md:order-2 md:basis-1/3 flex justify-center items-center gap-1">
          <LocationMarkerIcon className="h-5" />
          <a
            className="transition hover:underline hover:decoration-2 active:translate-y-1"
            href="https://www.google.com/maps?ll=47.204088,-1.547592&z=14&t=m&hl=fr&gl=FR&mapclient=embed&q=23+Rue+Petite+Biesse+44200+Nantes"
            target="_blank"
            rel="noreferrer"
          >
            {FooterData.adresse}
          </a>
        </p>
        <p className="md:order-last md:basis-full text-mini">
          {FooterData.copyright}
        </p>
        <div className="md:order-last md:basis-full flex flex-col md:flex-row md:justify-center text-mini opacity-50  ">
          Développé par
          <a
            className="px-2 underline"
            href="https://github.com/Francois-Chatelier"
          >
            François C.
          </a>
          <a
            className="px-2  underline"
            href="https://github.com/maxime-baillon"
          >
            Maxime B.
          </a>
          <a className="px-2  underline" href="https://github.com/anarkhya">
            Greg N.
          </a>
          <a
            className="px-2  underline"
            href="https://github.com/VictorPagnier"
          >
            Victor P.
          </a>
          <div className="">
            <Link to="/mentions-legales" target="_blank">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
