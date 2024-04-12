import Container from "@/components/Layout/shared/Container";
import "./../style/Home.css";
import Carousel from "@/components/homeCompo/Carousel";
import HomeText from "@/components/homeCompo/HomeText";

const Home = () => {
  return (
    <div className="bg-[#141131] ">
      <Container className="lg:h-[1000px] md:h-[1000px] h-[650px]">
        <div className="relative md:p-3">
          <div className="bg-pink-600 rounded-[50%] transition-transform lg:translate-x-[450px] lg:-translate-y-0 lg:w-[700px] h-[150px] blur-2xl  opacity-95 "></div>
          <div className="bg-pink-700 rounded-[45%] transition-transform translate-y-[-40px] w-[50px] h-[50px] blur-lg  opacity-95 rotate-45"></div>
          <div className="absolute top-4  bg-white/5 backdrop-blur-lg backdrop-opacity-60 h-[800px] w-full md:w-[97%] lg:w-[1260px] shadow-lg rounded-2xl">
            <HomeText />
            {/* image carousel */}
            <div>
              <Carousel />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
