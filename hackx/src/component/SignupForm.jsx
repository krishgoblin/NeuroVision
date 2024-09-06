import { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    class: "",
    preferredCourse: "",
    preferredPace: "",
    specificLearningNeeds: "",
    timeToSpread: "",
    username: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and signup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "http://localhost:3000/api/login" : "http://localhost:3000/api/signup";
      const response = await axios.post(endpoint, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className={`w-full max-w-md p-6 bg-white rounded shadow-lg ${isLogin ? 'text-sm' : 'text-base'}`}>
        <h1 className={`text-3xl font-bold mb-4 text-center ${isLogin ? 'text-2xl' : 'text-3xl'}`}>
          {isLogin ? "Login" : "Signup Form"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isLogin ? (
            <>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="username">Username/Email</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username or email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="class">Class</label>
                <input
                  type="text"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  placeholder="Enter your class"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="preferredCourse">Preferred Course</label>
                <select
                  id="preferredCourse"
                  name="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select your preferred course</option>
                  <option value="Maths">Maths</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="preferredPace">Preferred Learning Pace</label>
                <select
                  id="preferredPace"
                  name="preferredPace"
                  value={formData.preferredPace}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select your preferred learning pace</option>
                  <option value="slow">Slow</option>
                  <option value="medium">Medium</option>
                  <option value="fast">Fast</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-1" htmlFor="specificLearningNeeds">Specific Learning Needs</label>
                <input
                  type="text"
                  id="specificLearningNeeds"
                  name="specificLearningNeeds"
                  value={formData.specificLearningNeeds}
                  onChange={handleChange}
                  placeholder="Enter any specific learning needs"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              {/* <div>
                <label className="block text-lg font-medium mb-1" htmlFor="timeToSpread">Time to Spread</label>
                <input
                  type="text"
                  id="timeToSpread"
                  name="timeToSpread"
                  value={formData.timeToSpread}
                  onChange={handleChange}
                  placeholder="Enter the time you want to spread the course"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div> */}
            </>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
