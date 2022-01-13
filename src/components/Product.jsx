import React from "react";
<<<<<<< HEAD
import ButtonAdmin from "./modals/ButtonAdmin";
=======
import ButtonAdminProduct from "./modals/ButtonAdminProduct";
>>>>>>> 50c1daf6bf664b2f64ed698228e5cd6f971eb45f

const Product = ({ data }) => {
  // composant product se trouvant sur la page Echanges
  return (
    <div className="p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-vert text-blanc">
      <div className="text-right w-full">
        <ButtonAdminProduct />
      </div>
      <h1 className="text-center font-light text-h1">{data.title}</h1>
      <section className="md:w-1/2 flex flex-col gap-3">
        {data.presentation.map((pres) => (
          <div className=" flex justify-center items-center gap-3 flex-col md:flex-row">
            <p className="md:pr-4">{pres.infos}</p>
            <img
              src={pres.src}
              alt={pres.alt}
              className="w-28 h-auto mx-auto md:w-96"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
