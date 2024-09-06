import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes
import {
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  Heading,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';

const QuizDashboard = ({ apiResponse }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('API Response:', apiResponse);
    if (!apiResponse || typeof apiResponse !== 'object') {
      setError('Invalid API response');
    }
  }, [apiResponse]);

  const handleAnswerChange = (sectionIndex, questionIndex, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`section_${sectionIndex}_question_${questionIndex}`]: value,
    }));
  };

  const renderQuestion = (question, sectionIndex, questionIndex) => {
    switch (question.type) {
      case 'multiple_choice':
        return (
          <RadioGroup
            onChange={(value) => handleAnswerChange(sectionIndex, questionIndex, value)}
            value={userAnswers[`section_${sectionIndex}_question_${questionIndex}`]}
          >
            <Stack direction="column">
              {question.options &&
                question.options.map((option, optionIndex) => (
                  <Radio value={option} key={optionIndex}>
                    {option}
                  </Radio>
                ))}
            </Stack>
          </RadioGroup>
        );
      case 'short_answer':
      case 'fill_in_the_blank':
        return (
          <Input
            value={userAnswers[`section_${sectionIndex}_question_${questionIndex}`] || ''}
            onChange={(e) => handleAnswerChange(sectionIndex, questionIndex, e.target.value)}
            mt={2}
          />
        );
      case 'drawing':
        return <Text color="gray.600" fontStyle="italic">(Drawing question - implement drawing functionality)</Text>;
      default:
        return <Text color="red.500">Unsupported question type: {question.type}</Text>;
    }
  };

  const renderFeedbackQuestion = (question, index) => {
    switch (question.type) {
      case 'rating_scale':
        return (
          <RadioGroup>
            <Stack direction="row" spacing={4} mt={2}>
              {question.options &&
                question.options.map((option, optIndex) => (
                  <Radio value={option} key={optIndex}>
                    {option}
                  </Radio>
                ))}
            </Stack>
          </RadioGroup>
        );
      case 'yes_no':
        return (
          <RadioGroup>
            <Stack direction="row" spacing={4} mt={2}>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        );
      case 'text':
        return <Textarea mt={2} placeholder="Your answer" />;
      default:
        return <Text color="red.500">Unsupported feedback question type: {question.type}</Text>;
    }
  };

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <Box p={6}>
      <Heading mb={6}>Quiz Dashboard</Heading>
      {Object.entries(apiResponse)
        .filter(([key]) => key.startsWith('Section_'))
        .map(([sectionKey, section], index) => {
          if (typeof section !== 'object' || !('Theory' in section)) return null;
          return (
            <Card key={sectionKey} mb={6}>
              <CardHeader>
                <Heading size="md">
                  Section {index + 1}: {section.Theory}
                </Heading>
              </CardHeader>
              <CardBody>
                {section.Questions.map((question, qIndex) => (
                  <Box mb={4} key={qIndex}>
                    <Text fontWeight="bold">{question.text}</Text>
                    {renderQuestion(question, index, qIndex)}
                  </Box>
                ))}
                <Text color="gray.600" mt={4}>
                  Estimated Completion Time: {section.Estimated_completion_time}
                </Text>
              </CardBody>
            </Card>
          );
        })}
      {apiResponse.Feedback_form && (
        <Card mt={8}>
          <CardHeader>
            <Heading size="md">Feedback Form</Heading>
          </CardHeader>
          <CardBody>
            {apiResponse.Feedback_form.questions.map((question, index) => (
              <Box mb={4} key={index}>
                <Text fontWeight="bold">{question.text}</Text>
                {renderFeedbackQuestion(question, index)}
              </Box>
            ))}
          </CardBody>
        </Card>
      )}
      <Button mt={6} colorScheme="teal" onClick={() => console.log('User Answers:', userAnswers)}>
        Submit Quiz
      </Button>
    </Box>
  );
};

QuizDashboard.propTypes = {
  apiResponse: PropTypes.shape({
    No_of_sections: PropTypes.number.isRequired,
    Feedback_form: PropTypes.shape({
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    }),
    Section_1: PropTypes.shape({
      Theory: PropTypes.string.isRequired,
      Questions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(PropTypes.string),
        })
      ),
      Estimated_completion_time: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default QuizDashboard;
