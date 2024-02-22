import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Exercicio1 from "../pages/Exercicio1";
import Exercicio2 from "../pages/Exercicio2";
import Exercicio3 from "../pages/Exercicio3";
import TabelaFipe from "../pages/TabelaFipe";
import tabelaFipeStore from "../stores/TabelaFipeStore";

function NavMenu() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio1" element={<Exercicio1 />} />
        <Route path="/exercicio2" element={<Exercicio2 />} />
        <Route path="/exercicio3" element={<Exercicio3 />} />
        <Route
          path="/tabelafipe"
          element={<TabelaFipe store={tabelaFipeStore} />}
        />
      </Routes>
    </Router>
  );
}
export default NavMenu;
