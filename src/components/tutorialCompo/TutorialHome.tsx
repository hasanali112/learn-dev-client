import TutorialHomeCard from "./TutorialHomeCard";

const TutorialHome = () => {
  return (
    <div className=" text-white pt-5 pb-5">
      <div className="flex flex-col lg:flex-row gap-6 p-2">
        <TutorialHomeCard
          className="bg-gradient-to-r from-[#242147] via-[#242147] to-[#6F1D57]"
          title="Web Development"
          subtitle="Learn biginer to advance about web development"
          linkProp="/front-end"
        />
        <TutorialHomeCard
          className="bg-gradient-to-r from-[#1A4377] via-[#242147] to-[#242147]"
          title="C"
          subtitle="Learn biginer to advance about C"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 p-2">
        <TutorialHomeCard className="bg-gradient-to-r from-[#242147] via-[#242147] to-[#6F1D57]" />
        <TutorialHomeCard className="bg-gradient-to-r from-[#1A4377] via-[#242147] to-[#242147]" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 p-2">
        <TutorialHomeCard className="bg-gradient-to-r from-[#242147] via-[#242147] to-[#6F1D57]" />
        <TutorialHomeCard className="bg-gradient-to-r from-[#1A4377] via-[#242147] to-[#242147]" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 p-2">
        <TutorialHomeCard className="bg-gradient-to-r from-[#242147] via-[#242147] to-[#6F1D57]" />
        <TutorialHomeCard className="bg-gradient-to-r from-[#1A4377] via-[#242147] to-[#242147]" />
      </div>
    </div>
  );
};

export default TutorialHome;
