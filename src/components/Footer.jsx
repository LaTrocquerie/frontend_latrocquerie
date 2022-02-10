import React, { useContext, useState } from "react";
import axios from "axios";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const submitEmail = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8000/api/email/send",
      data: {
        name,
        email,
        subject,
        message,
      },
    }).then((response) => {
      if (response.data.status === "success") {
        setAlert(
          <span className="text-lime-600">
            Votre message a bien été envoyé!
          </span>
        );
        resetForm();
      } else if (response.data.status === "fail") {
        setAlert(
          <span className="text-red-600">
            L&32;envoi du message a échoué! (erreur serveur)
          </span>
        );
      }
    });
  };

  return (
    <div className={FooterData.cls}>
      <div className="flex justify-end pr-4 pt-4">
        {authContext.token && <ButtonAdmin type="footer" />}
      </div>
      <Map />
      <div className="flex flex-col content-center border-b mx-2 md:mx-8 lg:mx-44 xl:mx-96 ">
        <form id="contact-form" onSubmit={submitEmail} method="POST">
          <div>
            <input
              className="border-2 border-vert rounded-md p-2 mt-2 w-full focus:outline-none focus:border-rose"
              placeholder="Nom"
              id="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              className="border-2 border-vert rounded-md p-2 mt-2 w-full focus:outline-none focus:border-rose"
              placeholder="Email"
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              className="border-2 border-vert rounded-md p-2  mt-2 w-full focus:outline-none focus:border-rose"
              placeholder="Objet"
              id="subject"
              type="text"
              required
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <div>
            <textarea
              className="border-2 border-vert rounded-md p-2  mt-2 w-full focus:outline-none focus:border-rose"
              placeholder="Message"
              id="message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button
            className="text-white bg-vert p-2 mt-2 w-32 rounded-md"
            type="submit"
          >
            Envoyer
          </button>
          {alert && <p>{alert}</p>}
        </form>
      </div>
      <div className="py-4 flex flex-col items-center md:flex-row md:flex-wrap md:gap-0 text-center text-vert gap-5">
        <div className="md:order-1 mt-4 md:basis-1/3 list-none">
          <h2 className="text-h2 mb-3 font-bold">{FooterData.titreContact}</h2>
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
          <h2 className="text-h2 font-bold mb-3">{FooterData.titreHoraires}</h2>
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
