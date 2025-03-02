import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home"; // Home Component
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
