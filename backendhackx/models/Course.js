const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  courseName: String,
  sections: [
    {
      sectionTitle: String,
      theory: String,
      questions: [
        {
          question: String,
          options: [String],
          answer: String,
        },
      ],
      estimatedCompletionTime: String,
    },
  ],
  feedbackForm: {
    questions: [
      {
        text: String,
        type: String,
      },
    ],
  },
});

module.exports = mongoose.model("Course", CourseSchema);
