import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const OverviewPage = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen overflow-y-scroll"
      style={{ backgroundImage: "url('background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <nav className="absolute top-0 left-0 right-0 p-4 z-10 text-xl ">
        <ul className="flex justify-between">
          <li>
            <div className="flex">
              <Link
                to="/"
                className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
              >
                <BsArrowLeft className="text-2xl" />
              </Link>
            </div>
          </li>
          <div className="flex space-x-4">
            <li>
              <Link
                to="/job-postings"
                className="text-white hover:text-gray-300"
              >
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
          </div>
        </ul>
      </nav>
      <div className="relative py-12 px-8 bg-slate-700 bg-opacity-60 h-screen ">
        <h1 className="text-4xl font-bold text-white mb-8  mt-12">
          Overview of the Computer Science Industry
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white text-2xl mb-4">
              The Computer Science (CS) industry is a rapidly growing and
              dynamic field that encompasses a wide range of disciplines and
              applications. It involves the study of computation, information
              processing, and the design of computer systems and software.
            </p>
            <p className="text-white text-2xl mb-4">
              The CS industry can be divided into various fields, including:
            </p>
            <ul className="text-white text-2xl list-disc pl-6 mb-4">
              <li>Software Engineering</li>
              <li>Data Science</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Cybersecurity</li>
              <li>Web Development</li>
              <li>Cloud Computing</li>
              <li>Database Management</li>
              <li>Computer Graphics and Visualization</li>
            </ul>
          </div>
          <div>
            <img
              src="2.jpeg"
              alt="CS Industry"
              className="w-full mb-4 rounded"
              style={{ width: "auto", height: "400px" }}
            />
          </div>
        </div>
        <p className="text-white text-2xl mt-8">
          The CS industry has a significant impact on various sectors, with
          major companies like Google, Microsoft, Amazon, Apple, and Facebook
          leading the way in technological innovation and advancement.
        </p>
        <div className="mt-12 text-center pb-12">
          <Link
            to="/impact-of-ai"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-6 rounded text-xl "
          >
            Next: Impact of AI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
