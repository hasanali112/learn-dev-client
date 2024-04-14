import faqbannerImage from "../../../assets/faqbanner-t.webp";

const Faqbanner = () => {
  return (
    <div className="bg-gray-100 lg:w-[1200px] lg:h-[220px] border -translate-y-28 rounded-2xl shadow-sm shadow-gray-400">
      <div className="flex flex-col lg:flex-row gap-10 p-6">
        <div>
          <img
            className="object-cover bg-center rounded-lg lg:w-80"
            src={faqbannerImage}
            alt=""
          />
        </div>
        <div>
          <h1 className="lg:text-4xl md:text-3xl font-bold">
            Frequently Asked Questions_
          </h1>
          <p className="text-xl mt-4 mb-4">
            Bellow you will find answer to questions we get asked the most about
            applying{" "}
          </p>
          <button className="p-2 w-36 text-white font-semibold bg-pink-600 rounded-2xl">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqbanner;
