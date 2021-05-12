import styled from "styled-components";

const StyledWave = styled.div`
  position: absolute;
  width: 100%;
`;

export default function Wave() {
  return (
    <StyledWave>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#faaba9"
          fillOpacity="1"
          d="M0,288L60,293.3C120,299,240,309,360,304C480,299,600,277,720,250.7C840,224,960,192,1080,192C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </StyledWave>
  );
}
