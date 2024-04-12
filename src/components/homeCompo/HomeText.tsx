const HomeText = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl lg:text-5xl md:text-4xl font-bold text-white mt-10 md:mt-[100px] ">
          Welcome to Dev Hub
        </h1>
        <p className=" lg:text-2xl text-base md:text-xl lg:tracking-wider md:tracking-wide  text-center md:font-semibold text-white min-w-[30ch] lg:max-w-[60ch] md:max-w-[66ch] w-3/4 mx-auto mt-5">
          Develop critical tech skills. Cut cycle times. Build happier,
          healthier tech teams. And innovate smarter using AI. All with
          Pluralsight.
        </p>
      </div>
      <div className=" flex gap-3 justify-center items-center mt-6">
        <button className="p-2 w-36 text-white font-semibold bg-pink-600 rounded-2xl">
          Get Start
        </button>
        <button className="p-2 w-36 text-white font-semibold outline outline-1 outline-gray-500 hover:bg-gray-600 rounded-2xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomeText;
