import JobPostingsChart from "../charts/JobPostingsChart";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const JobPostings = () => {
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
      <div
        style={{ width: "65%" }}
        className="flex-col justify-center items-center ml-[25%]"
      >
        <JobPostingsChart />
        <div className="m-[20px]"></div>
        {/* <JobPostingsPolarChart /> */}
      </div>
    </div>
  );
};

export default JobPostings;
