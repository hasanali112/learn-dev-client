import need from "../../../assets/need.webp";

const Need = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-col gap-6 items-center justify-center">
      <div>
        <h1 className="text-3xl lg:text-5xl md:text-2xl font-bold text-center lg:text-left">
          Why Dev Hub?
        </h1>
        <p className="text-base tracking-wide max-w-[60ch] lg:max-w-[130ch] mt-3 text-left w-4/5 md:w-full lg:w-full mx-auto">
          Dev hub are pivotal for technological advancement, innovating
          solutions across industries. Their prowess in problem-solving,
          customization, and automation fuels operational efficiency and fosters
          innovation. With a steadfast focus on security, they fortify systems
          against cyber threats, safeguarding sensitive data. Moreover, their
          dedication to user experience ensures intuitive, responsive
          applications accessible to all. Scalability is paramount as they
          architect solutions to meet evolving demands. Through continuous
          iteration, they refine features and incorporate feedback, keeping
          software competitive. Proficient in programming languages, web
          technologies, and deployment practices, developers wield a versatile
          skill set to tackle diverse challenges. Ultimately, they drive digital
          progress, empowering businesses to thrive in a connected world.
        </p>
        <div className=" flex justify-center lg:justify-normal gap-3  mt-6">
          <button className="p-2 w-36 text-white font-semibold bg-pink-600 rounded-2xl">
            See all
          </button>
          <button className="p-2 w-36  font-semibold outline outline-1 outline-gray-500 hover:bg-gray-600 rounded-2xl">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={need} alt="" className="w-[1000px]" />
      </div>
    </div>
  );
};

export default Need;
