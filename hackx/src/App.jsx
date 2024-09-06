import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./component/Herosection";
import Courses from "./component/Courses";
import InputPage from "./component/InputPage";
import SignupForm from "./component/SignupForm"; // Import the SignupForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Courses />
          </>
        } />
        <Route path="/input" element={<InputPage />} />
        <Route path="/signup" element={<SignupForm />} /> {/* Add route for SignupForm */}
      </Routes>
    </Router>
  );
};

export default App;
