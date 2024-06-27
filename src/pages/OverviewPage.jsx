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
      <div className="relative py-12 px-8 bg-slate-700 bg-opacity-60 ">
        <div className="flex gap-20">
          <h1 className="text-4xl font-bold text-white mb-8  mt-12">
            Background Information about the Computer Science Industry
          </h1>
          <div className="mt-12 text-center pb-12">
            <Link
              to="/purpose"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-6 rounded text-xl "
            >
              Next: Purpose of Website
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <br></br>
            <p className="text-white text-2xl mb-4">
              The Computer Science (CS) industry is a rapidly growing and
              dynamic field that encompasses a wide range of disciplines and
              applications. It involves the study of computation, information
              processing, and the design of computer systems and software.
            </p>
            <p className="text-white text-2xl mb-4">
              The CS industry can be divided into various fields, including Software Engineering, Data Science, and Cybersecurity.
            </p>
            <p className="text-white text-2xl mt-8">
              The CS industry has a significant impact on various sectors, with
              major companies like Google, Microsoft, Amazon, Apple, and Facebook
              leading the way in technological innovation and advancement.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-white text-2xl mb-4">
              Generative AI has brought about significant changes in the computer
              science industry, with both positive and negative impacts.
            </p>
            <p className="text-white text-2xl mb-4">
              On the positive side, generative AI has opened up new possibilities for
              creative applications, such as generating realistic images, text,
              and music. It has also enabled the automation of certain tasks,
              improving efficiency and productivity.
            </p>
            <p className="text-white text-2xl mb-4">
              However, the rise of generative AI has also raised concerns about
              job displacement and the potential misuse of the technology. As AI
              models become more advanced, there is a risk of certain roles
              becoming automated, leading to job losses in some sectors.
            </p>
            {/* <ul className="text-white text-2xl list-disc pl-6 mb-4">
              <li>Software Engineering</li>
              <li>Data Science</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Cybersecurity</li>
              <li>Web Development</li>
              <li>Cloud Computing</li>
              <li>Database Management</li>
              <li>Computer Graphics and Visualization</li>
            </ul> */}
          </div>
          <div>
            <br></br>
            <img
              src="2.jpeg"
              alt="CS Industry"
              className="w-full mb-4 rounded"
              style={{ width: "auto", height: "400px" }}
            />
            <br></br>
            <img
              src="5.png"
              alt="History of AI"
              className="w-full mb-4 rounded"
              style={{ width: "auto", height: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
