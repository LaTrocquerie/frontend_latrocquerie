import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
// import Logo from "../components/Logo";
import Abonnement from "../components/Abonnement";
import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";
import Product from "../components/Product";
import Echanges from "../components/Echanges";
import Objets from "../components/Objets";
import Contact from "../components/Contact";
import Concept from "../components/Concept";
import Client from "../components/Client";

// // data
// import home from "../data/Home";
// import concept from "../data/Concept";
// import abonnement from "../data/Abonnement";
// import services from "../data/Services";
// import echanges from "../data/Echanges";
// import contact from "../data/Contact";

const Pages = () => {
  const [page, setPage] = useState({
    components: [],
  });

  const { pages } = useParams();

  const getComponent = (type, data) => {
    const component = {
      // logo: () => <Logo data={data} key={data.id_contact}/>,
      abonnement: () => <Abonnement data={data} key={data.bloc_order} />,
      article: () => <Article data={data} key={data.bloc_order} />,
      articleImage: () => <ArticleImage data={data} key={data.bloc_order} />,
      product: () => <Product data={data} key={data.bloc_order} />,
      categorie: () => <Echanges data={data} key={data.bloc_order} />,
      objets: () => <Objets data={data} key={data.bloc_order} />,
      echanges: () => <Echanges data={data} key={data.bloc_order} />,
      contact: () => <Contact data={data} key={data.bloc_order} />,
      concept: () => <Concept data={data} key={data.bloc_order} />,
      client: () => <Client data={data} key={data.bloc_order} />,
    };
    return component[type]();
  };
  const createComponent = () => {
    // const DetailsPages = {
    //   concept,
    //   abonnement,
    //   services,
    //   echanges,
    //   contact,
    // };
    // ancienne connexion avec la base de données statique

    const res = page.components.map((comp) =>
      getComponent(comp.component, comp.data)
    );
    return res;
  };

  // Connexion avec la base de donnée
  useEffect(() => {
    const pageRequest = pages || "accueil";
    fetch(`http://localhost:8000/api/pages/${pageRequest}`) // `http://localhost:8000/${id_pages}`
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPage(data);
      });
  }, [pages]);
  return <div>{page && <div>{createComponent()}</div>}</div>;
};

export default Pages;
