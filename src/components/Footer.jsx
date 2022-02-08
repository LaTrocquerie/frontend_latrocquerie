import React, { useContext } from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import FooterData from "../data/FooterData";
import ButtonAdmin from "./ButtonAdmin";
import Map from "./Map";
import { AuthContext } from "../contexts/authContext";

/**
 *
 *
 * @return {*}
 * data se trouvant dans data/FooterData
 * Map sur les horaires
 * Bouton Admin joint
 */
const Footer = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className={FooterData.cls}>
      <div className="flex justify-end pr-4 pt-4">
        {authContext.token && <ButtonAdmin type="footer" />}
      </div>
      <Map />
      <div className="py-4 flex flex-col items-center md:flex-row md:flex-wrap md:gap-0 text-center text-vert gap-5">
        <div className="md:order-1 mt-4 md:basis-1/3 list-none">
          <h2 className="text-h2 mb-2 font-bold">{FooterData.titreContact}</h2>
          <li className="flex justify-center">
            {FooterData.contact[0].mail}
            <img
              className="mr-1 w-6 ml-3"
              src={FooterData.contact[2].srcMailIcon}
              alt="phone icon"
            />
          </li>
          <li className="flex justify-center mt-2">
            {FooterData.contact[1].phone}
            <img
              className="mr-1 w-6 ml-3"
              src={FooterData.contact[3].srcPhoneIcon}
              alt="phone icon"
            />
          </li>
          <div className="flex mt-3 h-auto flex-row justify-center">
            <a
              href={FooterData.contact[4].url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="transition hover:bg-rose rounded active:translate-y-1"
                src={FooterData.contact[4].src}
                alt={FooterData.contact[4].alt}
              />
            </a>
            <a
              href={FooterData.contact[5].url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="transition hover:bg-rose rounded active:translate-y-1"
                src={FooterData.contact[5].src}
                alt={FooterData.contact[5].alt}
              />
            </a>
            <a
              href={FooterData.contact[6].url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="transition hover:bg-rose rounded active:translate-y-1"
                src={FooterData.contact[6].src}
                alt={FooterData.contact[6].alt}
              />
            </a>
          </div>
        </div>
        <div className="md:order-3 mt-4 md:basis-1/3 list-none">
          <h2 className="text-h2 font-bold mb-4">{FooterData.titreHoraires}</h2>
          {FooterData.horaires.map((horaire) => (
            <div className="mt-1">
              <li key={horaire.id}>{horaire.horaire}</li>
            </div>
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
            target="_blank"
            rel="noreferrer"
          >
            François C.
          </a>
          <a
            className="px-2  underline"
            href="https://github.com/maxime-baillon"
            target="_blank"
            rel="noreferrer"
          >
            Maxime B.
          </a>
          <a
            className="px-2  underline"
            href="https://github.com/anarkhya"
            target="_blank"
            rel="noreferrer"
          >
            Greg N.
          </a>
          <a
            className="px-2  underline"
            href="https://github.com/VictorPagnier"
            target="_blank"
            rel="noreferrer"
          >
            Victor P.
          </a>
        </div>
        <div className="md:order-last md:basis-full text-mini">
          <Link to="/mentions-legales" target="_blank" rel="noreferrer">
            Mentions légales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
