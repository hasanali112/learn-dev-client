import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TProps = {
  className: string;
  title?: string;
  subtitle?: string;
  linkProp?: string;
  buttonColor?: string;
};

const FrontEndCard = ({
  className,
  title,
  subtitle,
  linkProp,
  buttonColor,
}: TProps) => {
  return (
    <div>
      <div
        className={`${className} lg:w-[290px] lg:h-[150px] rounded-2xl p-4 text-white hover:-translate-y-3 duration-500`}
      >
        <h1 className="text-center lg:text-2xl text-xl font-bold w-full  mt-2">
          {title}
        </h1>
        <p className="text-center text-xl font-smibold  lg:mt-3 mt-2 max-w-[30ch] w-3/4 mx-auto">
          {subtitle}
        </p>
        <div className=" flex gap-3 justify-center items-center lg:mt-6 mt-3 mb-4 lg:mb-0">
          <Link to={`${linkProp}`}>
            <button
              className={cn(
                "p-2 w-24 text-white  bg-pink-600  rounded-xl",
                buttonColor
              )}
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontEndCard;
