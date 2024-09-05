// Import required modules
const express = require("express");
const axios = require("axios");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const prompt = `Just give the JSON format
Create a personalized math course based on the following student details:
{
  "full_name": "John Doe",
  "age": 10,
  "grade": "4",
  "preferred_learning_style": "visual",
  "preferred_courses": ["math", "science"],
  "preferred_content_format": ["videos", "interactive quizzes"],
  "specific_learning_needs": ["dyslexia"],
  "strengths": ["problem-solving", "creativity"],
  "challenges": ["attention span"],
  "motivational_factors": ["reward-based"],
  "learning_goals": ["improve math skills", "understand fractions"]
}

in the JSON format
{
  "No_of_sections": "",
  "Section_1": {
    "Theory": "",
    "Questions": [],
    "Estimated_completion_time": ""
  },
  "Section_2": {
    "Theory": "",
    "Questions": [],
    "Estimated_completion_time": ""
  },
  "Section_3": {
    "Theory": "",
    "Questions": [],
    "Estimated_completion_time": ""
  },
  "Section_4": {
    "Theory": "",
    "Questions": [],
    "Estimated_completion_time": ""
  },
  "Feedback_form": {
    "questions": [
      {
        "text": "",
        "type": ""
      }
    ]
  }
}`;


// const result = await model.generateContent(prompt);
// console.log(result.response.text());

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to handle requests to Gemini API
app.get("/api/gemini", async (req, res) => {
//   const { prompt } = req.body; // Expect a prompt to be passed in the request body
    console.log(prompt);
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    console.log(prompt);
    const genAI = new GoogleGenerativeAI("AIzaSyAIGrtMDFDYYO95J9OJNozis90vSci4rUQ");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    // Respond with the data from the API
    res.json({
      message: "Successfully fetched response from Gemini API",
      data: result.response.text(),
    });
  } catch (error) {
    // Error handling for failed API calls
    res.status(500).json({
      error: "Error fetching data from Gemini API",
      details: error.message,
    });
  }
});

// Error handling for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
