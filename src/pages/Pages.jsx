import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

// components
import Abonnement from "../components/Abonnement";
import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";
import Product from "../components/Product";
import Echanges from "../components/Echanges";
import Objets from "../components/Objets";
import Contact from "../components/Contact";
import Concept from "../components/Concept";
import Client from "../components/Client";
import ButtonNewsComponent from "../components/ButtonNewsComponent";

const Pages = () => {
  const [page, setPage] = useState({
    components: [],
  });
  const authContext = useContext(AuthContext);

  const { pages } = useParams();

  const getComponent = (type, data) => {
    const component = {
      abonnement: () => (
        <Abonnement data={data} key={data.bloc_order} component="abonnement" />
      ),
      article: () => (
        <Article data={data} key={data.bloc_order} component="article" />
      ),
      articleImage: () => (
        <ArticleImage
          data={data}
          key={data.bloc_order}
          component="articleImage"
        />
      ),
      product: () => (
        <Product data={data} key={data.bloc_order} component="product" />
      ),
      categorie: () => (
        <Echanges data={data} key={data.bloc_order} component="categorie" />
      ),
      objets: () => (
        <Objets data={data} key={data.bloc_order} component="objets" />
      ),
      echanges: () => (
        <Echanges data={data} key={data.bloc_order} component="categorie" />
      ),
      contact: () => (
        <Contact data={data} key={data.bloc_order} component="contact" />
      ),
      concept: () => (
        <Concept data={data} key={data.bloc_order} component="concept" />
      ),
      client: () => (
        <Client data={data} key={data.bloc_order} component="client" />
      ),
    };
    return component[type]();
  };
  const createComponent = () => {
    const res = page.components.map((comp) =>
      getComponent(comp.component, comp.data)
    );
    return res;
  };

  const setHead = (data) => {
    document.title = data.page.titre;
    const meta = document.createElement("meta");
    meta.setAttribute("description", data.page.description);
    document.getElementsByTagName("head")[0].appendChild(meta);
  };

  // Connexion avec la base de donnée pour fetch sur chaque composant de page
  useEffect(() => {
    const pageRequest = pages || "accueil";
    fetch(`${process.env.REACT_APP_BACK_END_URL}api/pages/${pageRequest}`) // `process.env.REACT_BACK_END_URL/${id_pages}`
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPage(data);
        setHead(data);
      });
  }, [pages]);
  return (
    <div>
      {page && <div>{createComponent()}</div>}
      {authContext.token && <ButtonNewsComponent />}
    </div>
  );
};

export default Pages;
