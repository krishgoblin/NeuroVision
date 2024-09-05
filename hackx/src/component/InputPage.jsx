import { useState } from "react";

const InputPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Input Page</h1>
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <p className="text-lg">You typed: {inputValue}</p>
    </div>
  );
};

export default InputPage;
