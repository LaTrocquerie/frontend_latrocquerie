import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    /* settimeout permet d'assurer l'éxecution après que les composants soient rendus. Cela aidera à corriger le bug pour certaines vues où défilement vers le haut ne fonctionnant pas parfaitement */
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
