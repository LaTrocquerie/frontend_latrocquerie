import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const AdminConnection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connexion, setConnexion] = useState(true);
  const [msg, setMsg] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (email.length > 1 && password.length > 1) {
      setMsg(null);
      setConnexion(false);
    } else {
      setMsg("Veuillez remplir les champs");
    }
  }, [email, password]);

  const getLogin = () => {
    authContext
      .loginUser(email, password)
      .then((res) => {
        if (authContext.email !== "") {
          const provCookie = `user_token=${res};expires=${new Date(
            Date.now() + 1000 * 60 * 60 * 4
          )}`;
          document.cookie = provCookie;
          navigate("/");
        } else {
          setMsg(res);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-vert text-blanc">
      <h1 className="uppercase text-h1 text-center mt-5">Authentification</h1>
      <div className="text-vert mb-4 mt-2">
        <Link to="/testtest">
          <form className="flex flex-col items-center">
            <label htmlFor="identifiant">
              Identifiant
              <input
                className="mb-3 px-2 mt-2 border-none md:w-96 flex items-center rounded focus:outline-none"
                id="nom"
                placeholder="Identifiant"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label htmlFor="mdp">
              Mot de passe
              <input
                className="mb-3 px-2 border-none md:w-96 flex items-center rounded focus:outline-none"
                type="password"
                id="mdp"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            {msg && <p className="text-blanc">{msg}</p>}
            <button
              className="transition hover:bg-rose hover:text-vert hover:border-rose active:-skew-y-6 active:translate-y-1 shadow-blanc/30 shadow-[10px_10px_0px_0px] active:shadow-blanc/20 bg-vert border-blanc border-2 text-blanc px-6 py-2 mt-7"
              type="button"
              disabled={connexion}
              onClick={() => getLogin()}
            >
              Connexion
            </button>
          </form>
        </Link>
      </div>
    </div>
  );
};

export default AdminConnection;
