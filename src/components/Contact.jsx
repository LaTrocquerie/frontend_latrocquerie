import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="">
      <div className="text-vert bg-gris_clair text-center pb-7">
        <p className="font-light text-h1 pt-6 ">{data.title}</p>
        <div className="font-regular text-normal">
          <p>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.mail}</p>
          <p>{data.site}</p>
          <p>{data.insta}</p>
          <p>{data.adresse}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;