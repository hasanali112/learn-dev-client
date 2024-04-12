import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const imageSlide = [
    {
      url: "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handlePrevSlide = () => {
    const lenghtFind = slideIndex === 0;
    const preIndex = lenghtFind ? imageSlide.length - 1 : slideIndex - 1;
    setSlideIndex(preIndex);
  };

  const handleNextSlide = () => {
    const findLength = slideIndex === imageSlide.length - 1;
    const currenIndex = findLength ? 0 : slideIndex + 1;
    setSlideIndex(currenIndex);
  };

  const handleIndicatorClick = (i: number) => {
    setSlideIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const findLength = slideIndex === imageSlide.length - 1;
      const currenIndex = findLength ? 0 : slideIndex + 1;
      setSlideIndex(currenIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex, imageSlide.length]);
  return (
    <div className="lg:w-3/4 md:w-4/5 mx-auto mt-10 relative group  p-3 md:p-0 lg:p-0">
      <div
        id="image-clip"
        style={{
          backgroundImage: `url(${imageSlide[slideIndex].url})`,
        }}
        className="w-[100%] h-[250px] lg:w-[950px] md:w-[630px] lg:h-[450px]  bg-center bg-cover duration-700"
      ></div>
      <div className="transition-transform translate-x-3 absolute top-[60%] left-0 hidden group-hover:block">
        <ChevronLeftIcon
          onClick={handlePrevSlide}
          className="w-8 h-8 bg-white rounded-full"
        />
      </div>
      <div className="transition-transform translate-x-[900px]  absolute top-[60%] hidden group-hover:block">
        <ChevronRightIcon
          onClick={handleNextSlide}
          className="w-8 h-8 bg-white rounded-full"
        />
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imageSlide.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full cursor-pointer
                    ${slideIndex === i ? "p-2" : "bg-opacity-50"}
                 `}
              onClick={() => handleIndicatorClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
