import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../effects.css";

const ModalEchanges = ({ isShowing, hide, data }) => {
  /** state pour changer ou non la valeur des inputs */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [description, setDescription] = useState(data.description);
  const [details, setDetails] = useState(data.details);
  const [infos, setInfos] = useState(data.infos);
  const [more, setMore] = useState(data.more);

  const onUpdateComponent = () => {
    hide();
  };

  const updateDetail = (value, type, obj) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(obj);
    newDetails[index][type] = value;
    setDetails(newDetails);
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
                Echanges - Modification du contenu
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
                  paragraphe
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="titre"
                    rows="5"
                    type="text"
                    value={description}
                    placeholder="titre du bloc"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <label htmlFor="description">
                  ligne
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="description"
                    type="text"
                    value={titre}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>

                {details.map((item) => {
                  return (
                    <div>
                      <p>
                        gommette actuelle
                        <img
                          className="blob w-16 h-16"
                          src={item.src}
                          alt={item.alt}
                        />
                      </p>
                      <label htmlFor="nom">
                        nouvelle gommette
                        <input
                          id="file"
                          className="transition bg-blanc hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                          type="file"
                        />
                      </label>
                      <label htmlFor="description">
                        Balise alt pour accessibilité
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                          id="description"
                          type="text"
                          value={item.alt}
                          placeholder="décrire succintement l'image, ex: paysage avec plage et palmiers"
                          onChange={(event) =>
                            updateDetail(event.target.value, "alt", item)
                          }
                        />
                      </label>
                    </div>
                  );
                })}
                <label htmlFor="titre">
                  Texte
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="titre"
                    rows="3"
                    type="text"
                    value={infos}
                    placeholder="titre du bloc"
                    onChange={(event) => setInfos(event.target.value)}
                  />
                </label>
                <label htmlFor="titre">
                  mini texte
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="titre"
                    rows="3"
                    type="text"
                    value={more}
                    placeholder="titre du bloc"
                    onChange={(event) => setMore(event.target.value)}
                  />
                </label>
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

export default ModalEchanges;
