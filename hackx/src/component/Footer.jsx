const Footer = () => {
    return (
      <div className="w-full h-auto max-w-[90vw] mx-auto bg-gradient-to-b from-green-100 to-blue-100 py-6">
        <div className="flex justify-between items-center px-8">
          {/* Left Section: Footer Links */}
          <div className="flex space-x-8">
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">
              Terms of Service
            </div>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">
              Privacy Policy
            </div>
          </div>
  
          {/* Middle Section: Platform Name */}
          <div className="text-2xl md:text-3xl font-bold text-black">
            PLATFORM NAME
          </div>
  
          {/* Right Section: Social Media / Other Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-gray-700">
              Facebook
            </a>
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-gray-700">
              Twitter
            </a>
            <a href="#" className="text-lg font-medium cursor-pointer hover:text-gray-700">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  