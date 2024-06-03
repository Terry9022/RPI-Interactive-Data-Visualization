import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Competitiveness from "./pages/Competitivenessl";
import Salaries from "./pages/Salaries";
import InfluenceGenAI from "./pages/InfluenceGenAI ";
import JobPostings from "./pages/JobPostings";

export const App = () => {
  return (
    <div className="gradient_bg min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitiveness" element={<Competitiveness />} />
        <Route path="/salaries" element={<Salaries />} />
        <Route path="/influence-genai" element={<InfluenceGenAI />} />
        <Route path="/job-postings" element={<JobPostings />} />
      </Routes>
    </div>
  );
};

export default App;
