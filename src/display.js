import { useState } from "react";
import Form from "./form";
import WordsContainer from "./wordsContainer";

export default function Display() {
  const [words, setWords] = useState({});
  const [wordsVisibile, setModalVis] = useState(false);

  return (
    <>
      <Form setWords={setWords} setModalVis={setModalVis} />
      <WordsContainer
        words={words}
        vis={wordsVisibile}
        setModalVis={setModalVis}
      />
    </>
  );
}
