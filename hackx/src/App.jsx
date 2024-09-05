import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing"; // New Landing Page Component
import InputPage from "./component/InputPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<InputPage />} />
      </Routes>
    </Router>
  );
};

export default App;
