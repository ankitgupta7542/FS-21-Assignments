import React, { useState } from 'react';

const loremIpsumText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum."
];

const App = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState([]);

  const generateLorem = () => {
    // Generate the requested number of paragraphs
    const text = Array.from({ length: paragraphs }, () =>
      loremIpsumText[Math.floor(Math.random() * loremIpsumText.length)]
    );
    setGeneratedText(text);
  };

  return (
    <div className="container">
      <h1>Lorem Ipsum Generator</h1>
      <label htmlFor="paragraphs">Number of Paragraphs:</label>
      <input
        type="number"
        id="paragraphs"
        value={paragraphs}
        onChange={(e) => setParagraphs(Number(e.target.value))}
        min="1"
      />
      <button onClick={generateLorem}>Generate</button>

      <div className="output">
        {generatedText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
