import styled from "styled-components";
import { useState } from "react";
import { colors } from "./colors";
import LengthError from "./lengthError";
import Loader from "./loader";

const StyledForm = styled.form`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  h2 {
    margin-bottom: 8px;
    margin-left: 3px;
  }

  .input-wrap {
    position: relative;
  }

  input {
    padding: 6px;
    height: 50px;
    border-style: none;
    border: 1px solid ${colors.lightGray};
    outline: none;

    &:focus {
      box-shadow: 0 0 1.5px ${colors.gray}, 0 0 2px ${colors.gray};
    }
  }

  input[type="text"] {
    width: 400px;
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  input[type="submit"] {
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    border: 1px solid ${colors.gray};
    border-left: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    background: ${colors.gray};
    color: ${colors.white};

    &:hover,
    &:active {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 540px) {
    input[type="text"] {
      width: 230px;
    }

    input[type="submit"] {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

export default function Form({ setWords }) {
  const [inputText, setInputText] = useState("");
  const [lengthError, setLengthError] = useState(false);
  const [isLoading, setLoadStatus] = useState(false);

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText) {
      return;
    } else if (inputText.length > 8) {
      setLengthError(true);
      return;
    }

    setLoadStatus(true);
    setLengthError(false);

    const url = process.env.REACT_APP_API_URL + "?word=" + inputText;
    const res = await fetch(url).catch((err) => console.error(err));
    const data = await res.json();

    setWords(data);
    setLoadStatus(false);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div className="input-wrap">
          <h2>Type a word and get started!</h2>
          <input type="text" value={inputText} onChange={handleInputChange} />
          <input type="submit" value="Scramble!" />
          <LengthError vis={lengthError} setLengthError={setLengthError} />
        </div>
      </StyledForm>
      <Loader vis={isLoading} />
    </>
  );
}
