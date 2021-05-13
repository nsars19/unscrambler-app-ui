import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import { colors } from "./colors";

const StyledContainer = styled.div`
  display: ${({ vis }) => (vis ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: ${colors.white};
  animation: appear 200ms ease;
  padding-bottom: 70px;

  .btn-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${colors.white};
    padding: 20px 30px;
    display: flex;
    justify-content: flex-end;
  }

  button {
    // position: fixed;
    // bottom: 20px;
    // right: 20px;
    padding: 8px;
    border-style: none;
    border-radius: 8px;
    background: ${colors.lightGray};
    cursor: pointer;
    font-size: 1.1rem;

    &:hover,
    &:active {
      filter: brightness(1.05);
    }
  }

  div.section-wrap {
    padding: 10px 20px;
    width: 100%;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2rem;
    }

    div {
      font-size: 1.1rem;
      max-width: 600px;
      text-align: center;
    }

    &:last-child {
      margin-bottom: 30px;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
  }

  @media (min-width: 1080px) {
    & {
      padding-top: 70px;
    }
    .btn-wrap {
      padding-top: 30px;
      top: 0px;
      left: 0px;
      bottom: unset;
      right: unset;
      justify-content: flex-start;
    }
  }
`;

export default function WordsContainer({ words, vis, setModalVis }) {
  const mapWords = () =>
    Object.entries(words).map(([key, vals]) => (
      <div
        className="section-wrap"
        key={uniqid()}
        style={{ display: vals.length > 0 ? "flex" : "none" }}
      >
        <h2>{key}</h2>
        <div>
          {vals.map((val, idx) => (
            <React.Fragment key={uniqid()}>
              {idx === vals.length - 1 ? val : val + ", "}
            </React.Fragment>
          ))}
        </div>
      </div>
    ));
  return (
    <StyledContainer vis={vis}>
      {mapWords()}
      <div className="btn-wrap">
        <button onClick={() => setModalVis(false)}>
          Scramble another word
        </button>
      </div>
    </StyledContainer>
  );
}
