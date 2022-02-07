import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [uploadFile, setUploadFile] = useState();

  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("file", uploadFile);

    axios.post("http://localhost:8000/api/upload", dataArray).then(() => {});
  };
  return (
    <form onSubmit={submitForm}>
      <input
        id="file"
        className="transition bg-blanc hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
        type="file"
        name="oruspu"
        onChange={(e) => setUploadFile(e.target.files[0])}
      />
      <input type="submit" />
    </form>
  );
}

export default ImageUpload;
