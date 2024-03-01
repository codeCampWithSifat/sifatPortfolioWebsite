import heroImage from "../assets/images/profilepic5.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black">
      <div className="my-auto mx-auto col-span-1 w-[300px] lg:w-[400px]">
        <img src={heroImage} alt="" />
      </div>
      <div className="col-span-2 px-5 my-auto mx-10">
        <p className="lg:text-6xl sm:text-5xl text-xl font-bold text-gray-200">
          Hi I Am <span>Sifat</span>
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web Designer", //  Continuing previous Text
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My Name is Sayed Hossain Sifat Junior MERN Developer
        </p>
        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to pink-500 text-white"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl  hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
