import styled from "styled-components";
import { colors } from "./colors";

const StyledLengthError = styled.div`
  display: ${({ vis }) => (vis ? "flex" : "none")};
  position: absolute;
  bottom: -75px;
  padding: 10px;
  border-radius: 18px;
  background: ${colors.red};
  max-width: 300px;
  font-size: 0.9rem;
  animation: appear 300ms ease;

  & .arrow {
    height: 20px;
    width: 20px;
    background: ${colors.red};
    position: absolute;
    top: -6px;
    left: 18px;
    transform: rotate(45deg);
  }

  @keyframes appear {
    from {
      bottom: -50px;
      opacity: 0;
      transform: scale(0.7);
    }
    top {
      bottom: -75px;
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default function LengthError({ vis, setLengthError }) {
  const toggleError = (e) => {
    setLengthError(false);
  };

  return (
    <StyledLengthError vis={vis} onClick={toggleError}>
      <p>
        Please try a word less than 8 letters. Anything more takes a very long
        time.
      </p>
      <div className="arrow"></div>
    </StyledLengthError>
  );
}
