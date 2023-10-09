import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header";
import Contato from "./components/pages/contato";
import Home from "./components/pages/home";
import Loja from "./components/pages/loja";
import Referencia from "./components/pages/referencia";
import Social from "./components/pages/social";
import NotFound from "./components/pages/notFound";
import Footer from "./components/layouts/footer";
// import Footer from './components/layouts/footer';
import {useState} from 'react'

function App() {

  const[scrollHeader, setScrollHeader] = useState(0);
  const[endPage, setEndPage] = useState(false);

  return (
    <div className="container">
      <Router>
        <Header scroll={scrollHeader}/>
        <div className="links-rotas">
          <Routes>
            <Route path="/" element={<Home setScroll={setScrollHeader} setEndPage={setEndPage}/>} />
            <Route path="/referencias" element={<Referencia />} />
            <Route path="/social" element={<Social />} />{" "}
            <Route path="/loja" element={<Loja />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer endPage={endPage}/>
      </Router>
    </div>
  );
}
export default App;
