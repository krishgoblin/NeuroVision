import { useState } from "react";
import axios from "axios"; // For making HTTP requests

const InputPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/gemini", {
        promptuser: inputValue
      });
      console.log(response.data);
      const result = response.data;
      setApiResponse(result); // Update this based on your API response structure
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiResponse("Error fetching data");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Input Page</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
      <p className="text-lg">API Response: {apiResponse}</p>
    </div>
  );
};

export default InputPage;
