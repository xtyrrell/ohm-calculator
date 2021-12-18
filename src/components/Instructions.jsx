import styled from "@emotion/styled";

const InstructionsContainer = styled.div``;

const Steps = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Instructions = ({ title, byline, steps }) => (
  <InstructionsContainer>
    {title ? <h3>{title}</h3> : null}
    <p>
      <em>
        {byline}
      </em>
    </p>
    <Steps>
      {steps.map(step => <li>{step}</li>)}
    </Steps>
  </InstructionsContainer>
);

export default Instructions;
