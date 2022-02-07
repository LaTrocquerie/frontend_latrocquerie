import axios from "axios";

const updateComponent = (data, token) => {
  return axios
    .put(
      `${process.env.REACT_APP_BACK_END_URL}api/pages/component`,
      { ...data },
      { headers: { token } }
    )
    .then((res) => res);
};

export default updateComponent;
