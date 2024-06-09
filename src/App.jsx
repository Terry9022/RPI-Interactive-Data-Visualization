import { Routes, Route } from "react-router-dom";
import "./index.css";
import Competitiveness from "./pages/Competitiveness";
import Salaries from "./pages/Salaries";
import InfluenceGenAI from "./pages/InfluenceGenAI ";
import JobPostings from "./pages/JobPostings";
import LandingPage from "./pages/LandingPage";
import OverviewPage from "./pages/OverviewPage";
import ImpactOfAIPage from "./pages/ImpactOfAIPage";
import PurposePage from "./pages/PurposePage";

export const App = () => {
  return (
    <div className="gradient_bg min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/impact-of-ai" element={<ImpactOfAIPage />} />
        <Route path="/purpose" element={<PurposePage />} />
        <Route path="/competitiveness" element={<Competitiveness />} />
        <Route path="/salaries" element={<Salaries />} />
        <Route path="/influence-genai" element={<InfluenceGenAI />} />
        <Route path="/job-postings" element={<JobPostings />} />
      </Routes>
    </div>
  );
};

export default App;
