import "./styles/main.css"
import { useTransition, animated } from '@react-spring/web'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/navbar/Navbar" 
import Footer from "./components/footer/footer"
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/Project";

import ScrollToTop from "./utils/ScrollToTop"


function App() {
  return (
    <div className="App">
      <>
        <ScrollToTop/>
        <Navbar />
                      <Routes>
                          <Route exact path="/" element={<Home />}/>
                          <Route exact path="projects" element={<Projects/>}/>
                          <Route exact path="project/:id" element={<ProjectPage/>}/>
                          <Route exact path="Contacts" element={<Contacts/>}/>
                        </Routes>
       
        
        <Footer />
      </>
    </div>
  );
}

export default App;
