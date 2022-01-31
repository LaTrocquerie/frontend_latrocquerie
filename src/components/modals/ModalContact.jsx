/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalContact = ({ isShowing, hide, data }) => {
  /** state qui est en lien avec la data de contact pour l'afficher */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [nom, setNom] = useState(data.nom);
  const [telephone, setTelephone] = useState(data.telephone);
  const [email, setEmail] = useState(data.mail);
  const [reseaux, setReseaux] = useState(data.reseaux);

  /* affiche user input */
  const updateReseaux = (value, type, obj) => {
    const newReseaux = [...reseaux];
    const index = newReseaux.indexOf(obj);
    newReseaux[index][type] = value;
    setReseaux(newReseaux);
  };

  const onUpdateComponent = () => {
    console.log({
      titre,
      nom,
      telephone,
      email,
      reseaux,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      titre,
      nom,
      telephone,
      email,
    });
    hide();
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
                Contact - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
                <label className="flex flex-col" htmlFor="b">
                  Arrière-plan vert ?
                  <input
                    className="w-5 h-5 my-2"
                    id="b"
                    type="checkbox"
                    value={cls}
                    onChange={(event) => setCls(event.target.value)}
                  />
                </label>
                <label htmlFor="titre">
                  Titre
                  <input
                    id="titre"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full font-light text-h1"
                    type="text"
                    value={titre}
                    placeholder="titre du bloc"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="nom">
                  Nom
                  <input
                    id="nom"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    type="text"
                    value={nom}
                    placeholder="titre du bloc"
                    onChange={(event) => setNom(event.target.value)}
                  />
                </label>
                <label htmlFor="telephone" className="">
                  Téléphone
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="telephone"
                    type="text"
                    value={telephone}
                    placeholder=""
                    onChange={(event) => setTelephone(event.target.value)}
                  />
                </label>
                <label htmlFor="email" className="">
                  E-mail
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="email"
                    type="text"
                    value={email}
                    placeholder=""
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>

                {reseaux.map((item) => {
                  return (
                    <div>
                      <label htmlFor="url" className="">
                        réseau social
                        <input
                          id="url"
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                          type="text"
                          value={item.url}
                          placeholder="adresse du réseau"
                          onChange={(event) =>
                            updateReseaux(event.target.value, "url", item)
                          }
                        />
                      </label>
                    </div>
                  );
                })}
                {/* ////////////////////////////// boutons de validation et suppression */}
                <section className="flex flex-row-reverse my-2 gap-4 px-2">
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                    type="button"
                    //  delete => string vide
                    onClick={() => onDeleteComponent()}
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 text-normal"
                    type="button"
                    onClick={() => onUpdateComponent()}
                  >
                    Valider
                  </button>
                </section>
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

export default ModalContact;
