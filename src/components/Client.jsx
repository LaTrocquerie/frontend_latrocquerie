import React, { useContext } from "react";
import ButtonAdmin from "./ButtonAdmin";
import { AuthContext } from "../contexts/authContext";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Concept
 * affiche les différents clients de la Trocquerie
 * @return {*}
 */
const Client = ({ data }) => {
  const authContext = useContext(AuthContext);

  return (
    <div
      className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert"
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        {authContext.token && <ButtonAdmin type="client" data={data} />}
      </div>
      <h1 className="uppercase text-center text-h1 font-light">{data.titre}</h1>
      <p className="md:w-1/2">{data.description}</p>
    </div>
  );
};

export default Client;
