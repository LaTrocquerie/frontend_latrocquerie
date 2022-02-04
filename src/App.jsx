import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminConnection from "./pages/AdminConnection";
import MentionsLegales from "./pages/MentionsLegales";
import { AuthContext } from "./contexts/authContext";

function App() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const token = document.cookie.split(";");
    if (token) authContext.setAdminProfil(token);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/:pages" element={<Pages />} />
          <Route path="/testtest" element={<AdminConnection />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
