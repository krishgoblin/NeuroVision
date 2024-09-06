import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <div className="flex justify-between items-center py-6 px-8">
          {/* Left Section: Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/input" className="cursor-pointer text-lg font-medium hover:text-gray-700">
              Courses
            </Link>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">About</div>
          </div>

          {/* Middle Section: Platform Name */}
          <div className="text-2xl md:text-4xl font-bold text-black">
        <Link to="/" className="cursor-pointer hover:text-gray-700">
          Neuro Vision
        </Link>
      </div>

          {/* Right Section: Search and Profile */}
          <div className="flex space-x-6">
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Progress</div>
            <div className="cursor-pointer text-lg font-medium hover:text-gray-700">Profile</div>
          </div>
        </div>
  );
};

export default Navbar;
