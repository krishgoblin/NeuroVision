import { useState } from 'react';
import axios from 'axios';

const TTS = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Step 1: Send input to Gemini API
      const geminiResponse = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        {
          contents: [{ parts: [{ text: input }] }]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `AIzaSyAV_zHqMvdlYbYgJ0VxU9lJoi5e21J9JiU`
          }
        }
      );

      const generatedText = geminiResponse.data.candidates[0].content.parts[0].text;
      setResponse(generatedText);

      // Step 2: Convert response to speech
      const ttsResponse = await axios.post(
        'https://texttospeech.googleapis.com/v1/text:synthesize',
        {
          input: { text: generatedText },
          voice: { languageCode: 'hi-IN', name: 'hi-IN-Wavenet-A' },
          audioConfig: { audioEncoding: 'MP3' }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_GOOGLE_CLOUD_API_KEY`
          }
        }
      );

      // Step 3: Play the audio
      const audioContent = ttsResponse.data.audioContent;
      const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
      audio.play();
    } catch (error) {
      console.error('Error:', error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt (in any Indian language)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" disabled={isLoading} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default TTS;
