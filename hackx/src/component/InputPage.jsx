import { useState } from "react";
import axios from "axios"; // For making HTTP requests
import NavBar from "./NavBar";

const InputPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState(null); // Initial state is now null to differentiate when the response is ready
  const [userAnswers, setUserAnswers] = useState({}); // To store user answers
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/gemini", {
        promptuser: inputValue,
      });
      const result = response.data;
      setApiResponse(result.data); // Store the entire API response
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiResponse("Error fetching data");
    }
    setIsLoading(false);
  };

  const handleAnswerChange = (sectionIndex, questionIndex, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`section_${sectionIndex}_question_${questionIndex}`]: value,
    }));
  };

  return (
    <>
      <NavBar />
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="w-1/4 h-screen bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-2">
            <li className="p-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Chapter 1: Components of Food
            </li>
            <li className="p-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Chapter 2: Sorting Materials Into Group
            </li>
            <li className="p-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Chapter 3: Separation of Substances
            </li>
            <li className="p-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Chapter 4: Getting to Know Plants
            </li>
            <li className="p-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Chapter 5: Body Movements
            </li>
            <li className="p-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">
              Chapter 6: Living Organisms
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-3/4 p-6">
          <h1 className="text-3xl font-bold mb-4">Courses</h1>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type something..."
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" disabled={isLoading} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
          </form>

          {/* Render Quiz if apiResponse exists
          {apiResponse && typeof apiResponse !== "string" && (
            <div>
              {Array.from({ length: apiResponse.No_of_sections }).map((_, sectionIndex) => {
                const sectionKey = `Section_${sectionIndex + 1}`;
                const section = apiResponse[sectionKey];

                return (
                  <div key={sectionKey} className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">
                      Section {sectionIndex + 1}: {section.Theory}
                    </h2>
                    {section.Questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="mb-4">
                        <p className="font-semibold">{question.text}</p>
                        {question.type === "multiple_choice" ? (
                          <div>
                            {question.options.map((option, optionIndex) => (
                              <label key={optionIndex} className="block">
                                <input
                                  type="radio"
                                  name={`section_${sectionIndex}_question_${questionIndex}`}
                                  value={option}
                                  onChange={() =>
                                    handleAnswerChange(sectionIndex, questionIndex, option)
                                  }
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        ) : question.type === "text_input" ? (
                          <input
                            type="text"
                            value={userAnswers[`section_${sectionIndex}_question_${questionIndex}`] || ""}
                            onChange={(e) =>
                              handleAnswerChange(sectionIndex, questionIndex, e.target.value)
                            }
                            className="border border-gray-300 p-2 rounded"
                          />
                        ) : question.type === "drawing" ? (
                          <p>(Drawing question - answer: {question.answer})</p>
                        ) : null}
                      </div>
                    ))}
                    <p className="text-gray-600">
                      Estimated Completion Time: {section.Estimated_completion_time}
                    </p>
                  </div>
                );
              })}
            </div>
          )} */}

          {typeof apiResponse === "string" && (
            <p className="text-lg text-red-600">{apiResponse}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default InputPage;
