import bannerImage from "../../../assets/white-halftone.png";

const LearnCard = () => {
  return (
    <div
      style={{
        background: `url(${bannerImage})`,
        backgroundColor: "#18152f",
      }}
      className=" h-[400px] lg:w-[1280px] pt-20  lg:pt-32 text-white"
    >
      <div className="flex flex-col lg:flex-row gap-6 p-2">
        <div className="bg-gradient-to-r from-[#242147] via-[#242147] to-[#6F1D57] lg:w-[800px] lg:h-[300px] rounded-2xl p-4">
          <h1 className="text-center lg:text-2xl text-xl font-bold w-full lg:w-1/2 mx-auto lg:mt-20  lg:p-0">
            Ready to get started with Pluralsight Skills?
          </h1>
          <p className="text-center text-xl font-smibold  lg:mt-3 mt-2">
            Develop better. Deliver better.
          </p>
          <div className=" flex gap-3 justify-center items-center lg:mt-6 mt-3 mb-4 lg:mb-0">
            <button className="p-2 w-36 text-white font-semibold bg-pink-600 rounded-2xl">
              View Plan
            </button>
            <button className="p-2 w-36 text-white font-semibold outline outline-1 outline-gray-500 hover:bg-gray-600 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1A4377] via-[#242147] to-[#242147] lg:w-[800px] lg:h-[300px] rounded-2xl p-4">
          <h1 className="text-center lg:text-2xl text-xl font-bold w-full lg:w-1/2 mx-auto lg:mt-20  lg:p-0">
            Ready to get started with Pluralsight Flow?
          </h1>
          <p className="text-center text-xl font-smibold  lg:mt-3 mt-2">
            Unlock and upgrade your processes.
          </p>
          <div className=" flex gap-3 justify-center items-center mt-6">
            <button className="p-2 w-36 text-white font-semibold bg-pink-600 rounded-2xl">
              View Plan
            </button>
            <button className="p-2 w-36 text-white font-semibold outline outline-1 outline-gray-500 hover:bg-gray-600 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCard;
