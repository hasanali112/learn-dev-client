import Container from "@/components/Layout/shared/Container";
import FrontEndCard from "./FrontEndCard";

const FrontEnd = () => {
  return (
    <div className="bg-[#18152f]">
      <Container className="pt-10 pb-10">
        <h1 className="text-4xl font-bold text-white mb-8">Fornt End Stack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <FrontEndCard className="frontendcard hover:hovercard" title="HTML" />
          <FrontEndCard className="frontendcard hover:hovercard" title="CSS" />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Tailwind"
          />
          <FrontEndCard className="frontendcard hover:hovercard" title="SASS" />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Project"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Java Script"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Project"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="React"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="TankStack Query"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Axios"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Redux"
          />
          <FrontEndCard className="frontendcard hover:hovercard" title="Next" />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Animation"
          />
          <FrontEndCard
            className="frontendcard hover:hovercard"
            title="Framer Motion"
          />
          <FrontEndCard className="frontendcard hover:hovercard" title="Gsap" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-8 mt-10">
          Back End Stack
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3">
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="HTML"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="CSS"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="Tailwind"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="SASS"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="Project"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="Java Script"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="Project"
          />
          <FrontEndCard
            className="hovercard hover:frontendcard"
            buttonColor="bg-cyan-600"
            title="React"
          />
        </div>
      </Container>
    </div>
  );
};

export default FrontEnd;
