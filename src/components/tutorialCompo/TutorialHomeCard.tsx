import { Link } from "react-router-dom";

type TProps = {
  className: string;
  title?: string;
  subtitle?: string;
  linkProp?: string;
};

const TutorialHomeCard = ({ className, title, subtitle, linkProp }: TProps) => {
  return (
    <div>
      <div
        className={`${className} lg:w-[580px] lg:h-[300px] rounded-2xl p-4 text-white`}
      >
        <h1 className="text-center lg:text-2xl text-xl font-bold w-full lg:w-1/2 mx-auto lg:mt-10  lg:p-0">
          {title}
        </h1>
        <p className="text-center text-xl font-smibold  lg:mt-3 mt-2 max-w-[30ch] w-3/4 mx-auto">
          {subtitle}
        </p>
        <div className=" flex gap-3 justify-center items-center lg:mt-6 mt-3 mb-4 lg:mb-0">
          <Link to={`${linkProp}`}>
            <button className="p-2 w-36 text-white font-semibold bg-pink-600 rounded-2xl">
              View Detail
            </button>
          </Link>
          <button className="p-2 w-36 text-white font-semibold outline outline-1 outline-gray-500 hover:bg-gray-600 rounded-2xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialHomeCard;
