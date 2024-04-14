import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import TutorialCard from "./TutorialCard";
import { useRef } from "react";

const Tutorial = () => {
  const boxConatianRef = useRef<HTMLDivElement>(null);

  const handlePreviousCard = () => {
    if (boxConatianRef.current) {
      const width = boxConatianRef.current.clientWidth;
      boxConatianRef.current.scrollLeft -= width;
    }
  };

  const handleNextCard = () => {
    if (boxConatianRef.current) {
      const width = boxConatianRef.current.clientWidth;
      boxConatianRef.current.scrollLeft += width;
    }
  };

  return (
    <div>
      <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center lg:text-left">
        Learn to Code
      </h1>
      <p className="text-base tracking-wide mt-3 text-center lg:text-left">
        Here find what you need. Learn and let code shape your career.
      </p>
      <div>
        <div
          ref={boxConatianRef}
          className="flex flex-row overflow-hidden gap-5 relative mt-4 scroll-smooth duration-300 lg:p-0 p-2"
        >
          <TutorialCard
            title="JavaScript"
            description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage."
          />
          <TutorialCard
            title="React"
            description="React.js is THE most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web and teaches you React in-depth, step by step by diving into all the core basics, exploring tons of examples and also introducing you to advanced concepts ."
          />
          <TutorialCard
            title="Python"
            description="Take  Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. "
          />
          <TutorialCard
            title="Next"
            description="We'll start at the very basics, no NextJS knowledge is required at all, and we'll then dive into all the core features that make up NextJS. Both in theory as well as with multiple real projects where all concepts will be applied step-by-step."
          />
          <TutorialCard
            title="Typescript"
            description="Learn what TypeScript is, why it really is a powerful addition to JavaScript, what its features are and how to use it! Learn why TypeScript is amazing, how it improves your JavaScript code and how it helps you avoid nasty bugs and errors!"
          />
          <TutorialCard
            title="Java"
            description="Its enduring presence in the tech world is unmatched, making it a wise choice for both budding and experienced programmers. Its popularity, as evidenced by Java's top 3 ranking in language use worldwide, promises abundant career opportunities."
          />
          <TutorialCard
            title="Mongooes"
            description="MongoDB is one of the most popular non-SQL databases. Its dynamic schema offers great storage flexibility, enabling your project to deal with ever-changing demands.Only basic JavaScript knowledge is needed to start this course.  "
          />
          <TutorialCard
            title="Redux"
            description="Redux is the most popular state management library for JavaScript applications. In this course, you will learn redux from scratch. If you are React or Angular or Vue developer, you can still follow this course because, in this course,"
          />
        </div>
        <div className="flex justify-between items-center -translate-y-[500%]">
          <div>
            <ChevronLeftIcon
              onClick={handlePreviousCard}
              className="w-8 h-8 bg-black text-white rounded-full cursor-pointer"
            />
          </div>
          <div>
            <ChevronRightIcon
              onClick={handleNextCard}
              className="w-8 h-8 bg-black text-white rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
