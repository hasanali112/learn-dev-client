type TProps = {
  title: string;
  description: string;
  className?: string;
};

const TutorialCard = ({ title, description, className }: TProps) => {
  return (
    <div
      className={`border bg-white border-gray-200 min-w-[250px] max-w-[250px] lg:min-w-[370px] lg:max-w-[370px] lg:h-[300px] md:h-[370px] h-[370px] ${className} shadow-sm shadow-gray-300 lg:p-5`}
    >
      <h1 className="text-center text-3xl font-bold lg:mt-0 mt-3">{title}</h1>
      <p className="text-center text-base mt-3">{description}</p>
    </div>
  );
};

export default TutorialCard;
