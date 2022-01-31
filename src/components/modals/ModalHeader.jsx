import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react/cjs/react.development";

const ModalHeader = ({ isShowing, hide, HeaderData }) => {
  /** state qui est en lien avec la data de header pour l'afficher */
  const [menus, setHeader] = useState(HeaderData.menus);
  const [alt, setAlt] = useState(HeaderData.logo.alt);
  // const [logo, setLogo] = useState(HeaderData.logo);

  const updateHeader = (value, type, obj) => {
    const newHeader = [...menus];
    const index = newHeader.indexOf(obj);
    newHeader[index][type] = value;
    setHeader(newHeader);
  };
  // const updateLogo = (value, type, obj) => {
  //   const newLogo = { logo };
  //   const index = newLogo.indexOf(obj);
  //   newLogo[index][type] = value;
  //   setLogo(newLogo);
  // };

  const onUpdateComponent = () => {
    console.log({
      component: "header",
      menus,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      component: "header",
      menus,
    });
    hide();
  };
  /** const qui contient le bouton cliquable pour afficher le modal */
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
              <div className="flex justify-end ">
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
              {/* contenu global du modal */}
              <h1 className="text-center text-h2 p-2">
                En tête - Modification du contenu
              </h1>
              <div>
                <p className="">
                  logo actuel
                  <img
                    className="w-32 mt-2 mb-4"
                    src={HeaderData.logo.src}
                    alt={HeaderData.logo.alt}
                  />
                </p>
                <label htmlFor="nom" className="">
                  nouveau logo
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
                    value={alt}
                    placeholder="décrire succintement l'image, ex: paysage avec plage et palmiers"
                    onChange={(event) => setAlt(event.target.value)}
                  />
                </label>
              </div>
              {/* map sur la data de header */}
              {menus.map((menu) => {
                <div>{menu.to}</div>;
                return (
                  <div>
                    <label htmlFor="nom" className="">
                      Nom du menu
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={menu.name}
                        placeholder=""
                        onChange={(event) =>
                          updateHeader(event.target.value, "name", menu)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      lien
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={menu.to}
                        placeholder=""
                        onChange={(event) =>
                          updateHeader(event.target.value, "to", menu)
                        }
                      />
                    </label>
                  </div>
                );
              })}
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

export default ModalHeader;
