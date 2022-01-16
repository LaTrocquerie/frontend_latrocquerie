/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalHeader = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");

  const getModal = () => {
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
                Header - Modification du contenu
              </h1>
              <div>
                <label htmlFor="nom" className="text-rose">
                  En cours
                  <input
                    id="nom"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded m-2 px-2 w-full"
                    type="text"
                    value={titre}
                    placeholder="en cours"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
              </div>
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
