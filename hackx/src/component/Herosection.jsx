import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="w-full h-auto max-w-[90vw] mx-auto">
      <div className="relative w-full h-full">
        {/* Navbar Section */}
        <div className="flex justify-between items-center py-6 px-8">
          {/* Left Section: Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/input" className="cursor-pointer text-lg font-medium hover:text-gray-700">
              Input Page
            </Link>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">About</div>
          </div>

          {/* Middle Section: Platform Name */}
          <div className="text-2xl md:text-4xl font-bold text-black">
            Neuro Vision
          </div>

          {/* Right Section: Search and Profile */}
          <div className="flex space-x-6">
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Progress</div>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Profile</div>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 px-8">
          {/* Hero Image */}
          <img
            className="w-64 h-64 object-cover md:w-[400px] md:h-[400px]"
            src="path/to/hero.png"
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
