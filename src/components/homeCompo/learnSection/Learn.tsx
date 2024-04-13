import image1 from "../../../assets/javascript-inky.png";
import image2 from "../../../assets/react-inky.png";
import image3 from "../../../assets/python-inky.png";
import image4 from "../../../assets/ruby-inky.png";
import image5 from "../../../assets/java-inky.png";
import image6 from "../../../assets/azure-dark.webp";
import image7 from "../../../assets/aws-inky.png";
import image8 from "../../../assets/csharp-inky.png";
import LearnCard from "./LearnCard";

const Learn = () => {
  const learnImage = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div>
      <div className=" text-white  flex flex-col lg:flex-row gap-10">
        <div>
          <h1 className="lg:text-left text-center text-4xl font-bold">
            Learn and Increases your Skilled{" "}
          </h1>
          <p className="text-rose-600 text-xl text-center lg:text-left font-bold mt-3">
            Explore all Skill
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 lg:gap-2 gap-3 mx-2 lg:mx-0">
          {learnImage.map((img) => (
            <img
              src={img}
              alt=""
              className="lg:w-24 w-20 hover:border-2  hover:border-pink-700 rounded-xl hover:-translate-y-4 duration-500 shadow-xl shadow-black"
            />
          ))}
        </div>
      </div>
      <div>
        <LearnCard />
      </div>
    </div>
  );
};

export default Learn;
