import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";

const StyledContainer = styled.div`
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
`;

export default function WordsContainer({ words }) {
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
  return <StyledContainer>{mapWords()}</StyledContainer>;
}
