import { useState } from "react";
import Form from "./form";
import Header from "./header";
import WordsContainer from "./wordsContainer";

function App() {
  const [words, setWords] = useState({});

  return (
    <>
      <Header />
      <Form setWords={setWords} />
      <WordsContainer words={words} />
    </>
  );
}

export default App;
