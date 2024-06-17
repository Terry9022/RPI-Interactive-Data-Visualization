import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ImpactOfAIPage = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen overflow-scroll"
      style={{ backgroundImage: "url('background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <nav className="absolute top-0 left-0 right-0 p-4 z-10 text-xl">
        <ul className="flex justify-between">
          <li>
            <div className="flex">
              <Link
                to="/overview"
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
      <div className="relative py-12 px-8 bg-slate-700 bg-opacity-60 h-screen">
        <h1 className="text-4xl font-bold text-white mb-8 mt-12">
          Impact of AI on the Computer Science Industry
        </h1>
        <div>
          <div>
            <img
              src="4.png"
              alt="History of Generative AI"
              className="w-full mb-4 rounded "
              style={{
                width: "80%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </div>
        <div
          className="mb-14 mt-10 text-justify"
          style={{
            width: "80%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p className="text-white text-2xl mb-4">
            Generative AI has brought about significant changes in the computer
            science industry, with both positive and negative impacts. On the
            positive side, generative AI has opened up new possibilities for
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
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/purpose"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-6 rounded text-xl"
          >
            Next: Purpose of Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImpactOfAIPage;
