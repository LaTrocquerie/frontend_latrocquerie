import React, { useState } from "react";
import ModalArticle from "./modals/ModalArticle";
import ModalAbonnement from "./modals/ModalAbonnement";
import ModalArticleImage from "./modals/ModalArticleImage";
import ModalContact from "./modals/ModalContact";
import ModalEchanges from "./modals/ModalEchanges";
import ModalFooter from "./modals/ModalFooter";
import ModalHeader from "./modals/ModalHeader";
import ModalObjets from "./modals/ModalObjets";
import ModalProduct from "./modals/ModalProduct";
import ModalClient from "./modals/ModalClient";
import ModalConcept from "./modals/ModalConcept";
import ModalNewComponent from "./modals/ModalNewComponent";
import HeaderData from "../data/HeaderData";

/**
 *
 *
 * @param {*} { type: objet }
 * @return {*} un bouton d'administration sur chaque modal appartenant à différents component
 */
const ButtonAdmin = ({ type, data }) => {
  const [modal, setModal] = useState("");
  // const [visible, setVisible] = useState();

  // const toogleVisibility = () => {
  //   setVisible((prevState) => ({ visible: !prevState.visible }));
  // };

  const toggle = () => {
    setModal("");
  };
  const getModal = () => {
    console.log(getModal);
    const myModal = {
      article: <ModalArticle isShowing hide={toggle} data={data} />,
      abonnement: <ModalAbonnement isShowing hide={toggle} data={data} />,
      articleImage: <ModalArticleImage isShowing hide={toggle} data={data} />,
      contact: <ModalContact isShowing hide={toggle} data={data} />,
      echanges: <ModalEchanges isShowing hide={toggle} data={data} />,
      footer: <ModalFooter isShowing hide={toggle} data={data} />,
      header: <ModalHeader isShowing hide={toggle} HeaderData={HeaderData} />,
      objets: <ModalObjets isShowing hide={toggle} data={data} />,
      product: <ModalProduct isShowing hide={toggle} data={data} />,
      client: <ModalClient isShowing hide={toggle} data={data} />,
      concept: <ModalConcept isShowing hide={toggle} data={data} />,
      newComponent: <ModalNewComponent isShowing hide={toggle} data={data} />,
    };
    setModal(myModal[type]);
  };

  return (
    <div className="">
      {/* {console.log(modal)} */}
      {/* {modal ? ( */}
      <button type="submit" onClick={() => getModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#0ff"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* ) : (
        ""
      )}
      {modal} */}
      {modal}
    </div>
  );
};

export default ButtonAdmin;
