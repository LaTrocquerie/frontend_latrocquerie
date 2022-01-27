import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminConnection from "./pages/AdminConnection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/:pages" element={<Pages />} />
          <Route path="/testtest" element={<AdminConnection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
