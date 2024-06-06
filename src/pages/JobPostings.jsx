import JobPostingsChart from "../charts/JobPostingsChart";
import JobPostingsPolarChart from "../charts/JobPostingsPolarChart";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const JobPostings = () => {
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
      <div
        style={{ width: "70%", height: "800px" }}
        className="flex justify-center items-center ml-[15%]"
      >
        <JobPostingsChart />
        <div className="m-[20px]"></div>
        <JobPostingsPolarChart />
      </div>
    </div>
  );
};

export default JobPostings;
