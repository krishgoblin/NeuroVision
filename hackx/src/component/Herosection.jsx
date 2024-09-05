const HeroSection = () => {
  return (
    <div className="w-full h-auto max-w-[90vw] mx-auto">
      <div className="relative w-full h-full">
        {/* Navbar Section */}
        <div className="flex justify-between items-center py-6 px-8">
          {/* Left Section: Navigation Links */}
          <div className="flex space-x-8">
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Courses</div>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">About</div>
          </div>

          {/* Middle Section: Platform Name */}
          <div className="text-2xl md:text-4xl font-bold text-black">
            Neuro Vision
          </div>

          {/* Right Section: Search and Profile */}
          <div className="flex space-x-6">
            {/* <div className="bg-green-200 py-2 px-4 rounded-full cursor-pointer hover:bg-green-300">
              Search
              </div> */}
              <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Progress</div>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Profile</div>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 px-8">
          {/* Hero Image */}
          <img
            className="w-64 h-64 object-cover md:w-[400px] md:h-[400px]"
            src="https://www.google.com/imgres?q=study%20images%20png&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F06%2F47%2F92%2F0647924515d6621eb713265d7d1fa856.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fself-learning-png-picture-education-learning-self-study-illustration-illustration-education-self-study-png-image-for-free-download-in-2023--782993085234632000%2F&docid=jTqIIG2y256yNM&tbnid=RuabNNmwyHvNGM&vet=12ahUKEwjcy6--zqyIAxXOm68BHclEMXcQM3oECFkQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjcy6--zqyIAxXOm68BHclEMXcQM3oECFkQAA" // Adjust the image path as necessary
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

export default HeroSection;
