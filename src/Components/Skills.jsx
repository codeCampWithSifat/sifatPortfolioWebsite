import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";

const Skills = () => {
  return (
    <div className="mt-10">
      <div className=" text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
          My <br /> Tech <br /> Stack
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} alt="" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} alt="" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={javascript} alt="" />
          <p className="mt-2">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} alt="" />
          <p className="mt-2">REACT</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={tailwind} alt="" />
          <p className="mt-2">TAILWIND</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
