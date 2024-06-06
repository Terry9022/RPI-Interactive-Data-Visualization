import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ImpactOfAIPage = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <nav className="absolute top-0 left-0 right-0 p-4 z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Brief History of Generative AI
            </h2>
            <p className="text-white text-lg mb-4">
              Generative AI has its roots in the field of machine learning and
              has gained significant popularity in recent years. It involves
              training AI models on vast amounts of data to generate new
              content, such as images, text, and audio, that resembles the
              training data.
            </p>
            <p className="text-white text-lg mb-4">
              The rise of generative AI can be attributed to advancements in
              deep learning architectures, increased computational power, and
              the availability of large datasets. Some notable milestones in the
              development of generative AI include the introduction of
              Generative Adversarial Networks (GANs) in 2014 and the release of
              powerful language models like GPT-3 by OpenAI.
            </p>
          </div>
          <div>
            <img
              src="path/to/history-image.jpg"
              alt="History of Generative AI"
              className="w-full mb-4 rounded"
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Impact on the Computer Science Industry
          </h2>
          <p className="text-white text-lg mb-4">
            Generative AI has brought about significant changes in the computer
            science industry, with both positive and negative impacts. On the
            positive side, generative AI has opened up new possibilities for
            creative applications, such as generating realistic images, text,
            and music. It has also enabled the automation of certain tasks,
            improving efficiency and productivity.
          </p>
          <p className="text-white text-lg mb-4">
            However, the rise of generative AI has also raised concerns about
            job displacement and the potential misuse of the technology. As AI
            models become more advanced, there is a risk of certain roles
            becoming automated, leading to job losses in some sectors.
            Additionally, the ability to generate realistic content has raised
            issues related to deepfakes and the spread of misinformation.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/purpose"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Next: Purpose of Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImpactOfAIPage;
