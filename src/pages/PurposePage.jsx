import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const PurposePage = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen overflow-y-scroll"
      style={{ backgroundImage: "url('background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <nav className="absolute top-0 left-0 right-0 p-4 z-10">
        <ul className="flex justify-between">
          <li>
            <div className="flex">
              <Link
                to="/impact-of-ai"
                className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
              >
                <BsArrowLeft className="text-2xl" />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className="relative py-12 px-8 bg-slate-700 bg-opacity-60 h-screen">
        <h1 className="text-4xl font-bold text-white mb-8 mt-12">
          Purpose of the Website
        </h1>
        <p className="text-white text-2xl mb-8">
          The main purpose of this website is to provide data visualizations
          that provide insights and information to guide you in making informed
          decisions about your career path.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Job Postings</h2>
            <p className="text-2xl mb-8">
              Explore the number of job postings for each profession in Computer
              Science at both junior and senior levels.
            </p>
            <Link
              to="/job-postings"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-xl "
            >
              View Job Postings
            </Link>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Competitiveness</h2>
            <p className="text-2xl mb-8">
              Discover the competitiveness of entry-level jobs in various
              Computer Science fields.
            </p>
            <Link
              to="/competitiveness"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-xl "
            >
              View Competitiveness
            </Link>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Salaries</h2>
            <p className="text-2xl mb-8">
              Compare salaries and salary maximums for specific careers in
              Computer Science at both junior and senior levels.
            </p>
            <Link
              to="/salaries"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-xl "
            >
              View Salaries
            </Link>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Influence of GenAI</h2>
            <p className="text-2xl mb-8">
              Understand the influence of Generative AI (GenAI) on the Computer
              Science industry.
            </p>
            <Link
              to="/influence-genai"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-xl"
            >
              View Influence of GenAI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposePage;
