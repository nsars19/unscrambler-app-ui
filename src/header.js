import styled from "styled-components";
import Wave from "./waves";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 20px;
  padding-top: 20px;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.2rem;
  }
`;

export default function Header() {
  return (
    <>
      <Wave />
      <StyledHeader>
        <h1>Scrambler</h1>
        <h3>words within words</h3>
      </StyledHeader>
    </>
  );
}
