import React from "react";
import { useParams } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Article from "../components/Article";
import Product from "../components/Product";
import Echanges from "../components/Echanges";

// data
import home from "../data/Home";
import concept from "../data/Concept";
import abonnement from "../data/Abonnement";
import services from "../data/Services";
import echanges from "../data/Echanges";

const Pages = () => {
  const { pages } = useParams();
  const getComponent = (type, data) => {
    const component = {
      header: () => <Header data={data} />,
      logo: () => <Logo data={data} />,
      footer: () => <Footer data={data} />,
      article: () => <Article data={data} />,
      product: () => <Product data={data} />,
      echanges: () => <Echanges data={data} />,
    };
    return component[type]();
  };
  const createComponent = () => {
    const DetailsPages = {
      concept,
      abonnement,
      services,
      echanges,
    };
    const DetailsComp = DetailsPages[pages] || home;

    const res = DetailsComp.map((comp) =>
      getComponent(comp.component, comp.data)
    );
    return res;
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {createComponent()}
    </div>
  );
};

export default Pages;
