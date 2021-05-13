import { useState } from "react";
import Form from "./form";
import WordsContainer from "./wordsContainer";

export default function Display() {
  const [words, setWords] = useState({});

  return (
    <>
      <Form setWords={setWords} />
      <WordsContainer words={words} />
    </>
  );
}
