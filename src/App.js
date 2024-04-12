import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Kids from "./pages/Kids";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import UploadKids from "./components/UploadKids";
import KidDetailsPage from "./components/KidDetailsPage";
import PostPictures from "./components/PostPictures";
import LayersProject from "./components/LayersProject";
import ProjectBroilers from "./components/ProjectBroilers";
import PigsProject from "./components/PigsProject";
import NotFound from "./components/NotFound";

// Backend URL
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload-kids" element={<UploadKids />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/post-pictures" element={<PostPictures />} />
        <Route path="/layers-project" element={<LayersProject />} />
        <Route path="/broilers-project" element={<ProjectBroilers />} />
        <Route path="/pigs-project" element={<PigsProject />} />
        <Route path="/kid-details/:id" element={<KidDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
