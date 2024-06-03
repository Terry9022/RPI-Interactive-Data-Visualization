import Header from "../components/Header";

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex-col justify-between items-center">
        <h1 className="text-3xl my-8 text-center text-red-800 font-extrabold cursor-default">
          COMM-6880 Interactive Data Visualization
        </h1>
        <Header />
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">
            COMM-6880 Interactive Data Visualization
          </h2>
          <p className="mb-4">
            Having a website that shows and compares the different fields within
            CS and shows all the impacts of GenAI on each field, with
            informative data visualizations that show how the industry has
            changed in recent years and the level of success that can be
            achieved in the present state of the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
