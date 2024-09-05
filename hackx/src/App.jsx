import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./component/Herosection";
import Courses from "./component/Courses";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <HeroSection />
        <Courses />
        {/* <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes> */}
      </div>
    </Router>
  );
};

export default App;
