/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalClient = ({ isShowing, hide, data }) => {
  /** state qui est en lien avec la data de concept pour l'afficher */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [description, setDescription] = useState(data.description);

  const onUpdateComponent = () => {
    console.log({
      component: "article",
      data: {
        ...data,
        titre,
        description,
        cls,
      },
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      titre,
      description,
    });
    hide();
  };

  const getModal = () => {
    /** isShowing affiche le modal */
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // modal-overlay */}
          <div className="fixed top-0 left-0 z-1040 w-screen h-screen bg-vert opacity-70" />
          {/* // modal-wrapper */}
          <div
            className="fixed top-0 left-0 z-1050 w-full h-full overflow-x-hidden overflow-y-auto"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // modal */}
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-gris_clair p-3 rounded text-vert">
              {/* // modal-header */}
              <div className="flex justify-end">
                {/* // modal-close-button */}
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
              <h1 className="text-center text-h2 p-2">
                Clients - Modification du contenu
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
                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    type="text"
                    rows="4"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
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
export default ModalClient;
