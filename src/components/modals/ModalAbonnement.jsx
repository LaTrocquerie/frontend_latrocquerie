import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalAbonnement = ({ isShowing, hide, data }) => {
  /* states affichent data */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [details, setDetails] = useState(data.details);
  const [description, setDescription] = useState(data.description);

  /* affiche user input */
  const updateDetail = (value, type, obj) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(obj);
    newDetails[index][type] = value;
    setDetails(newDetails);
  };
  /* suppression ciblée avec le bon index - splice */
  // const deleteDetail = (obj) => {
  //   const newDetails = [...details];
  //   const index = newDetails.indexOf(obj);
  //   newDetails.splice(index, 1);
  //   setDetails(newDetails);
  // };
  /* ajoute nouveau bloc - push */
  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push({ detail: "", description1: "", description2: "" });
    setDetails(newDetails);
  };

  const onUpdateComponent = () => {
    console.log({
      component: "abonnement",
      data: {
        ...data,
        cls,
        titre,
        details,
        description,
      },
    });
    hide();
  };
  // const onDeleteComponent = () => {
  //   console.log({
  //     cls,
  //     titre,
  //     details,
  //     description,
  //   });
  //   hide();
  // };

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
                Abonnement - Modification du contenu
              </h1>

              {/* ////////////////////////////////      permet modifications éléments actuels par admin */}
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
              <label htmlFor="titre" className="">
                Titre
                <input
                  className="uppercase transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full font-light text-h1"
                  id="titre"
                  type="text"
                  value={titre}
                  placeholder="Titre"
                  onChange={(event) => setTitre(event.target.value)}
                />
              </label>

              {details.map((item) => {
                return (
                  <div>
                    <label htmlFor="nom" className="">
                      ligne en gras
                      <input
                        id="nom"
                        className="transition uppercase font-bold text-h2 hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.detail}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "detail", item)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      ligne 1
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.description1}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "description1", item)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      ligne 2
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.description2}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "description2", item)
                        }
                      />
                    </label>
                    <section className="flex flex-row-reverse my-2 gap-4 px-2">
                      {/* <button
                        className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                        type="button"
                        onClick={() => deleteDetail(item)}
                      >
                        Supprimer
                      </button> */}
                    </section>
                  </div>
                );
              })}
              <section className="flex justify-center mt-8 my-2 gap-4 px-2">
                <button
                  type="submit"
                  className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 my-2"
                  onClick={() => addDetails()}
                >
                  Ajouter un autre bloc
                </button>
              </section>
              <label htmlFor="titre" className="">
                ligne
                <input
                  className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                  id="titre"
                  type="text"
                  value={description}
                  placeholder="Titre"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
              {/* ////////////////////////////// boutons de validation et suppression */}
              <section className="flex flex-row-reverse my-2 gap-4 px-2">
                {/* <button
                  className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                  type="button"
                  //  delete => string vide
                  onClick={() => onDeleteComponent()}
                >
                  Supprimer
                </button> */}
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

export default ModalAbonnement;
