import heroImg from '../images/hero.png';
import Navbar from "./NavBar";

const Herosection = () => {
  return (
    <div className="w-full h-auto max-w-[90vw] mx-auto">
      <div className="relative w-full h-full">
        {/* Navbar Section */}
        <Navbar />
        {/* Main Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 px-8">
          {/* Hero Image */}
          <img
            className="w-64 h-64 object-cover md:w-[400px] md:h-[400px]"
            src={heroImg}
            alt="Hero"
          />

          {/* Hero Text */}
          <div className="text-center md:text-left text-3xl md:text-5xl font-bold mt-8 md:mt-0 text-black leading-snug">
            Empowering Education <br /> For Everyone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
