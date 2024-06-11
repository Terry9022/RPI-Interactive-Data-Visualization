import CompetitivenessScatterChart from "../charts/CompetitivenessScatterChart";
import CompetitivenessPolarAreaChart from "../charts/CompetitivenessPolarAreaChart";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const Competitiveness = () => {
  return (
    <div className="p-4">
      <BackButton />
      <div className="p-4">
        <div className="flex-col justify-between items-center">
          <h1 className="text-3xl mb-2 text-center text-red-800 font-extrabold cursor-default">
            Interactive Data Visualization
          </h1>
          <Header />
        </div>
      </div>
      <div style={{ width: "60%", height: "600px", margin: "auto" }}>
        <CompetitivenessScatterChart />
        <div className="m-[30px]"></div>
        {/* <CompetitivenessPolarAreaChart /> */}
      </div>
    </div>
  );
};

export default Competitiveness;
