import styled from "styled-components";
import { colors } from "./colors";

const StyledLoader = styled.div`
  display: ${({ vis }) => (vis ? "flex" : "none")};
  align-items: center;
  position: fixed;
  top: calc(50% - 85px);
  left: calc(50% - 150px);
  height: 170px;
  width: 300px;
  background: ${colors.lightGray};
  color: ${colors.black};
  border: 50px solid ${colors.gray};
  border-top-color: ${colors.red};
  border-radius: 28px;
  overflow: hidden;
  animation: lights 1500ms ease infinite;

  span {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${colors.gray};
    animation: goLeft 2000ms ease infinite;
    margin-right: -15px;
    position: absolute;
    right: 0;
  }

  span:first-child {
    animation-delay: 0;
  }

  span:nth-child(2) {
    animation-delay: 500ms;
  }

  span:nth-child(3) {
    animation-delay: 1000ms;
  }

  @keyframes goLeft {
    0% {
      right: 0;
    }
    25% {
      transform: scale(2.5);
    }
    75% {
      transform: scale(1);
    }
    100% {
      right: 340px;
      transform: scale(1);
    }
  }

  @keyframes lights {
    25% {
      border-top-color: ${colors.red};
      border-right-color: ${colors.gray};
      border-bottom-color: ${colors.gray};
      border-left-color: ${colors.gray};
    }
    50% {
      border-top-color: ${colors.gray};
      border-right-color: ${colors.red};
      border-bottom-color: ${colors.gray};
      border-left-color: ${colors.gray};
    }
    75% {
      border-top-color: ${colors.gray};
      border-right-color: ${colors.gray};
      border-bottom-color: ${colors.red};
      border-left-color: ${colors.gray};
    }
    100% {
      border-top-color: ${colors.gray};
      border-right-color: ${colors.gray};
      border-bottom-color: ${colors.gray};
      border-left-color: ${colors.red};
    }
  }
`;

export default function Loader({ vis }) {
  return (
    <StyledLoader vis={vis}>
      <span />
      <span />
      <span />
    </StyledLoader>
  );
}
