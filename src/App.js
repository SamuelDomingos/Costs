import './index.css';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {  } from "react-icons/fa";

import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Projects from './components/pages/Projects';
import NovosProjetos from "./components/pages/NovosProjetos";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";


import Container from './components/layouts/Container';
import Project from './components/pages/Project';

function App() {
  return (

    <div>

      <Navbar/>

      <Container customClass="min-height">

      <Routes>
        
      <Route path="/" element={<Home />} />

      <Route path="contato" element={<Contato/>} />

      <Route path="projects" element={<Projects />} />

      <Route path="novosprojetos" element={<NovosProjetos />} />

      <Route path="/project/:id" element={<Project />} />

      </Routes>
      </Container>

      <Footer/>

    </div>
  );
}

export default App;
