/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalObjets = ({ isShowing, hide, data }) => {
  /** state pour changer ou non la valeur des inputs */
  const [cls, setCls] = useState(data.cls);
  const [details, setDetails] = useState(data.details);

  /* affiche user input */
  const updateCategorie = (value, type, obj) => {
    const newCategorie = [...details];
    const index = newCategorie.indexOf(obj);
    newCategorie[index][type] = value;
    setDetails(newCategorie);
  };
  // /* suppression ciblée avec le bon index */
  // const deleteDetail = (obj) => {
  //   const newDetails = [...details];
  //   const index = newDetails.indexOf(obj);
  //   newDetails.splice(index, 1);
  //   setDetails(newDetails);
  // };

  /* ajoute nouveau bloc - push */
  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push({ appartenance: "", cible: "" });
    setDetails(newDetails);
  };

  const onUpdateComponent = () => {
    console.log({
      component: "objets",
      data: { ...data, cls, details },
    });
    hide();
  };
  // const onDeleteComponent = () => {
  //   console.log({
  //     component: "objets",
  //     data: { ...data, cls, details },
  //   });
  //   hide();
  // };

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
              {/* contenu global du modal qui se trouve dans la page échanges */}
              <h1 className="text-center text-h2 p-2">
                Objets - Modification du contenu
              </h1>
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
              {details.map((item) => {
                return (
                  <div>
                    <label htmlFor="1" className="">
                      titre
                      <input
                        id=""
                        className="transition uppercase text-h2 font-bold hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.appartenance}
                        placeholder=""
                        onChange={(event) =>
                          updateCategorie(
                            event.target.value,
                            "appartenance",
                            item
                          )
                        }
                      />
                    </label>
                    <label htmlFor="2" className="">
                      description
                      <input
                        id=""
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.cible}
                        placeholder=""
                        onChange={(event) =>
                          updateCategorie(event.target.value, "cible", item)
                        }
                      />
                    </label>
                  </div>
                );
              })}
              <section className="flex justify-center mt-8 my-2 gap-4 px-2 mb-8">
                <button
                  type="submit"
                  className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 my-2"
                  onClick={() => addDetails()}
                >
                  Ajouter un autre bloc
                </button>
              </section>
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

export default ModalObjets;
