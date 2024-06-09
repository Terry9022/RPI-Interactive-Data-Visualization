import SalariesBarChart from "../charts/SalariesBarChart";
import SalariesScatterChart from "../charts/SalariesScatterChart";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const Salaries = () => {
  return (
    <div className="p-4">
      <BackButton />
      <div className="p-4">
        <div className="flex-col justify-between items-center">
          <h1 className="text-3xl mb-2 text-center text-red-800 font-extrabold cursor-default">
            COMM-6880 Interactive Data Visualization
          </h1>
          <Header />
        </div>
      </div>
      <div style={{ width: "60%", height: "600px", margin: "auto" }}>
        <SalariesBarChart/>
        <div className="m-[30px]"></div>
        <SalariesScatterChart/>
      </div>
    </div>
  );
};

export default Salaries;