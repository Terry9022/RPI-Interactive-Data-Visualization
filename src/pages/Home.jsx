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
            Since the audience is primarily those already pursuing studies or
            job opportunities in the computer science field, the website and
            data visualizations should focus on computer science, such as using
            CS-related terms that the audience would be familiar with, and
            provide useful information about job potential in the computer
            science field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
