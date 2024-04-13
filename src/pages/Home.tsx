import Container from "@/components/Layout/shared/Container";
import "./../style/Home.css";
import Carousel from "@/components/homeCompo/Carousel";
import HomeText from "@/components/homeCompo/HomeText";
import Learn from "@/components/homeCompo/learnSection/Learn";

const Home = () => {
  return (
    <div className="bg-[#18152f] ">
      <Container className="h-[570px] md:h-[550px] lg:h-[890px]">
        <div className=" md:p-3">
          <div className="bg-pink-600 rounded-[50%] transition-transform lg:translate-x-[450px] lg:-translate-y-0 lg:w-[700px] h-[150px] blur-2xl  opacity-95 "></div>
          <div className="bg-pink-700 rounded-[45%] transition-transform translate-y-[-40px] w-[50px] h-[50px] blur-lg  opacity-95 rotate-45"></div>
          {/* <div className="bg-pink-700 rounded-sm transition-transform translate-y-[590px] translate-x-[100px] w-[1100px] h-[80px]   opacity-95 blur-2xl"></div> */}
          <div className="bg-white/5 backdrop-blur-lg backdrop-opacity-60 h-[500px] lg:h-[850px] w-full md:w-[97%] lg:w-[1260px] shadow-lg rounded-2xl transition-transform -translate-y-48 lg:-translate-y-50">
            <HomeText />
            {/* image carousel */}
            <div>
              <Carousel />
            </div>
          </div>
        </div>
      </Container>
      <Container className="h-[1000px] lg:h-[600px] lg:mt-36 ">
        <Learn />
      </Container>
    </div>
  );
};

export default Home;
