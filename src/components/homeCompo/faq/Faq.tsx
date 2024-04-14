import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "./../../../assets/faq.png";

const Faq = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-4 lg:justify-between justify-center items-center ">
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl lg:text-2xl font-bold hover:no-underline">
              For whome is need?
            </AccordionTrigger>
            <AccordionContent className=" max-w-[70ch]">
              Yes. Learners often seek guidance on selecting appropriate courses
              based on their current proficiency level, interests, and career
              objectives. The FAQ could outline factors to consider, such as
              course content, difficulty level, prerequisites, and teaching
              style.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl lg:text-2xl font-bold hover:no-underline lg:mt-3 ">
              What prior experience do need?
            </AccordionTrigger>
            <AccordionContent className=" max-w-[70ch]">
              Since We’ll Be Teaching From Scratch, You Don’t Need To Know
              Anything Beforehand. But If You Have Free Time, You Can Do These
              Things: Be Comfortable With A Computer, Internet So That You Can
              Search Anything Online You Should Have Basic English Literacy
              Typing Speed 15-30 Wpm Will Be Excellent. Familiarity With HTML,
              CSS Would Be Fantastic
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl lg:text-2xl font-bold hover:no-underline lg:mt-3 ">
              What education background need ?
            </AccordionTrigger>
            <AccordionContent className="max-w-[70ch]">
              We Have Designed The Course In Such A Way That Your Educational
              Background Doesn’t Matter Here. You Can Do This Course From Any
              Educational Background. Anyone, Such As A University Student,
              College Student, Jobber, Unemployed, Lover, Runaway Lover, Even
              The Girlfriend Who Doesn’t Pick Up The Phone Can Do This Course.
              However, You Have To Commit 6-8 Hours Everyday.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <img
          className="bg-cover object-cover bg-center w-[500px]"
          src={faq}
          alt=""
        />
      </div>
    </div>
  );
};

export default Faq;
