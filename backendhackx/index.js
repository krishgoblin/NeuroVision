// Import required modules
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors()); // Enable CORS

const prompt = `
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
} 
  
Generate a JSON object containing the following information about fractions:

* **No_of_sections:** The total number of sections.
* **Section_1:**
    * **Theory:** A brief explanation of the concepts covered in the first section.
    * **Questions:** An array of questions with their types (e.g., multiple choice, short answer, drawing) and options (if applicable).
    * **Estimated_completion_time:** The estimated time to complete the section.
* **Section_2:** (Repeat the same structure as Section_1)
* **Section_3:** (Repeat the same structure as Section_1)
* **Section_4:** (Repeat the same structure as Section_1)
* **Feedback_form:**
    * **Questions:** An array of questions with their types (e.g., rating scale, yes/no, text) and options (if applicable).

Please format the response in JSON format.`;


const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to handle requests to Gemini API
app.post("/api/gemini", async (req, res) => {
  const { promptuser } = req.body; 
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    console.log(prompt + " " + promptuser);
    const genAI = new GoogleGenerativeAI("API key");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt + " " + promptuser);

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

// app.post("/api/signup", async (req, res) => {
//   const {
//     name, age, gender, class: userClass, preferredCourse, preferredPace,
//     specificLearningNeeds, username, password,
//   } = req.body;

//   try {
//     const newUser = new User({
//       name, age, gender, class: userClass, preferredCourse, preferredPace,
//       specificLearningNeeds, username, password,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ error: "Invalid username or password" });
//     }

//     const isMatch = await user.comparePassword(password);

//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid username or password" });
//     }

//     res.status(200).json({ message: "Login successful" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/api/courses", async (req, res) => {
//   const { userId, courseName, sections, feedbackForm } = req.body;

//   try {
//     const newCourse = new Course({
//       userId,
//       courseName,
//       sections,
//       feedbackForm,
//     });

//     await newCourse.save();
//     res.status(201).json({ message: "Course created successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Error handling for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
