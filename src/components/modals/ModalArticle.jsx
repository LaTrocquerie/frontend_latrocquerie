/* eslint-disable indent */
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import updateComponent from "../../services/admin";
import { AuthContext } from "../../contexts/authContext";

const ModalArticle = ({ isShowing, hide, data }) => {
  /* states affichent data actuelle || user input */
  const [titre, setTitre] = useState(data.titre);
  const [description, setDescription] = useState(data.description);
  const [description2, setDescription2] = useState(data.description2);
  const [description3, setDescription3] = useState(data.description3);
  const [url, setUrl] = useState(data.url);
  const [cls, setCls] = useState(data.cls);
  const [bouton, setBouton] = useState(data.bouton);
  const [clsCitation, setClsCitation] = useState(data.clsCitation);
  const authContext = useContext(AuthContext);

  // bouton valider met à jour la base de données, si authentifié puis ferme le modal
  const onUpdateComponent = () => {
    const form = {
      component: "article",
      data: {
        ...data,
        titre,
        description,
        description2,
        description3,
        url,
        cls,
        bouton,
        clsCitation,
      },
    };
    updateComponent(form, authContext.token).then(() => {
      hide();
    });
  };

  // changement de fond vert/gris_clair du composant
  const handleClsCheckbox = () => {
    if (cls === null) {
      setCls(1);
    } else if (cls === 1) {
      setCls(2);
    } else {
      setCls(1);
    }
  };

  const handleBoutonCheckbox = () => {
    if (bouton === null) {
      setBouton(1);
    } else if (bouton === 1) {
      setBouton(2);
    } else {
      setBouton(1);
    }
  };

  const handleClsCitationCheckbox = () => {
    if (clsCitation === null) {
      setClsCitation(1);
    } else if (clsCitation === 1) {
      setClsCitation(2);
    } else {
      setClsCitation(1);
    }
  };

  const getModal = () => {
    /** isShowing affiche le modal */
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // style modal-overlay */}
          <div className="fixed top-0 left-0 z-1040 w-screen h-screen bg-vert opacity-70" />
          {/* // style modal-wrapper */}
          <div
            className="fixed top-0 left-0 z-1050 w-full h-full overflow-x-hidden overflow-y-auto"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // style modal */}
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-gris_clair p-3 rounded text-vert">
              {/* // style modal-header */}
              <div className="flex justify-end">
                {/* // style modal-close-button */}
                {/* bouton croix pour fermer le modal */}
                <button
                  type="button"
                  className="text-h1 leading-none"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h1 className="text-center text-h2">
                Article - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
                <label className="flex flex-col" htmlFor="checkbox">
                  Changer la couleur du fond ?
                  <input
                    className="w-5 h-5 my-2"
                    id="checkbox"
                    type="checkbox"
                    value={cls}
                    onChange={handleClsCheckbox}
                  />
                </label>
                <label htmlFor="titre" className="">
                  Titre
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full uppercase font-light text-h1"
                    id="titre"
                    type="text"
                    value={titre}
                    placeholder="titre du bloc"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="1">
                  Paragraphe
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="1"
                    type="text"
                    rows="4"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <label htmlFor="2">
                  2nd paragraphe
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="2"
                    type="text"
                    rows="4"
                    value={description2}
                    placeholder="contenu du deuxième paragraphe"
                    onChange={(event) => setDescription2(event.target.value)}
                  />
                </label>
                <label htmlFor="3">
                  3eme paragraphe
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="d3"
                    type="text"
                    rows="4"
                    value={description3}
                    placeholder="contenu du troisième paragraphe"
                    onChange={(event) => setDescription3(event.target.value)}
                  />
                </label>
                <div className="flex flex-col">
                  <label htmlFor="b">
                    ajouter/supprimer un bouton ?
                    <input
                      className="m-2 w-5 h-5 mb-4"
                      id="b"
                      type="checkbox"
                      value={bouton}
                      onChange={handleBoutonCheckbox}
                    />
                  </label>
                </div>
                <label htmlFor="btn-url">
                  Lien du bouton
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-2 px-2 w-full"
                    id="btn-url"
                    type="text"
                    value={url}
                    placeholder="/nom du menu, exemple: /concept pour lien vers page concept"
                    onChange={(event) => setUrl(event.target.value)}
                  />
                </label>
                <label htmlFor="btn-url">
                  De type citation ?
                  <input
                    className="m-2 w-5 h-5 mb-4"
                    id="btn-url"
                    type="checkbox"
                    value={clsCitation}
                    placeholder="/nom du menu, exemple: /concept pour lien vers page concept"
                    onChange={handleClsCitationCheckbox}
                  />
                </label>
              </section>
              {/* ////////////////////////////// boutons de validation et suppression */}
              <section className="flex flex-row-reverse my-2 gap-4 px-2">
                <button
                  className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 text-normal"
                  type="button"
                  onClick={() => onUpdateComponent()}
                >
                  Valider
                </button>
              </section>
            </div>
          </div>
        </>,
        document.body
      );
    }
    return null;
  };
  return getModal();
};

export default ModalArticle;
