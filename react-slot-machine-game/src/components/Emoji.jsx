import React from "react";
import Result from "./Result";

// Array of emojis
const emojis = ["😄", "😸", "👍", "😃", "😙", "😢", "😿", "🔮"];

// Function to get three random emojis from the array
const getRandomEmojis = (emojiArray) => {
  let randomEmojis = [];
  while (randomEmojis.length < 3) {
    const randomIndex = Math.floor(Math.random() * emojiArray.length);
    if (!randomEmojis.includes(emojiArray[randomIndex])) {
      randomEmojis.push(emojiArray[randomIndex]);
    }
  }
  return randomEmojis;
};

// Component to render emojis
const EmojiComponent = () => {
  const randomEmojis = getRandomEmojis(emojis);

  return (
    <>
      <h1>
        {randomEmojis.map((emoji, index) => (
          <span key={index}>{emoji}</span>
        ))}
      </h1>

      <Result emojis = {randomEmojis}/>
    </>
  );
};

export default EmojiComponent;
