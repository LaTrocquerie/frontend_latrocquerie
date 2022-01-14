/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalProduct = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");
  const [info, setInfo] = useState("");
  const [images, setImages] = useState([]);

  const onChangeDetails = (value, detail) => {
    const newDetails = [...images];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setImages(newDetails);
  };

  const addDetails = () => {
    const newDetails = [...images];
    newDetails.push("");
    setImages(newDetails);
  };
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
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-blanc p-3 rounded text-vert">
              {/* // modal-header */}
              <div className="flex justify-end">
                {/* // modal-close-button */}
                <label htmlFor="titre">
                  Titre
                  <input
                    id="titre"
                    type="text"
                    value={titre}
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="info">
                  Info supplémentaire
                  <input
                    id="info"
                    type="text"
                    value={info}
                    onChange={(event) => setInfo(event.target.value)}
                  />
                </label>
                <button type="button" onClick={() => addDetails()}>
                  Ajouter une image
                </button>
                {images.map((image) => {
                  return (
                    <label htmlFor="image">
                      <input
                        type="img"
                        value={image?.image}
                        onChange={(event) =>
                          onChangeDetails(event.target.value, image)
                        }
                      />
                    </label>
                  );
                })}
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
export default ModalProduct;
