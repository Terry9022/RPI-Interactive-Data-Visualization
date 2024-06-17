import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <nav className="absolute top-0 left-0 right-0 p-4 z-10 text-xl">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="/job-postings" className="text-white hover:text-gray-300">
              Job Postings
            </Link>
          </li>
          <li>
            <Link
              to="/competitiveness"
              className="text-white hover:text-gray-300"
            >
              Competitiveness
            </Link>
          </li>
          <li>
            <Link to="/salaries" className="text-white hover:text-gray-300">
              Salaries
            </Link>
          </li>
          <li>
            <Link
              to="/influence-genai"
              className="text-white hover:text-gray-300"
            >
              Influence of GenAI
            </Link>
          </li>
        </ul>
      </nav>
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-4">
          Explore the State of the Computer Science Industry
        </h1>
        <p className="text-xl text-white text-center mb-8">
          Discover how different fields in computer science compare to each
          other and gain insights into the current landscape.
        </p>
        <Link
          to="/overview"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-xl"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
