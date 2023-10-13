import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import './style.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './Pages/Home'
import Publications from './Pages/Publications'
import About from './Pages/About';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
