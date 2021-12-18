import styled from "@emotion/styled";

import ScrollContainer from "./ScrollContainer";

const Title = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 400px) {
    ::before {
      content: "☙";
      margin-right: 0.5rem;
      flex: 0 0;
    }

    ::after {
      content: "❧";
      margin-left: 0.5rem;
      flex: 0 0;
    }
  }
`;

const ScrollExplainer = ({ title, explainer }) => (
  <ScrollContainer>
    <Title>{title}</Title>
    {explainer}
  </ScrollContainer>
);

export default ScrollExplainer;
