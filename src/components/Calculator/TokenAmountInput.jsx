import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  position: absolute;
  left: 10px;
  color: #333;
  font-size: 28px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  @media (min-width: 750px) {
    font-size: 36px;
  }
`;

const Input = styled.input`
  font-size: 28px;
  font-family: "Roboto Mono", "Courier New", Courier, monospace;
  margin: 0;
  width: 100%;

  padding-left: 1.25em;

  &:disabled {
    background: #2ee028;
  }

  &:focus {
    background-color: #ddd;
    outline: 4px solid black;
  }

  @media (min-width: 750px) {
    font-size: 36px;
  }
`;

const TokenAmountInput = ({ onChange, value, symbol, ...otherProps }) => {
  // const validationMessage = <strong>Only enter numbers</strong>;
  const id = `input-${symbol}`;
  return (
    <Container>
      <Label htmlFor={id}>{symbol}</Label>
      <Input
        id={id}
        onChange={onChange}
        value={value}
        type="text"
        inputMode="numeric"
        {...otherProps}
      />
      {/* TODO: Validation -- only numbers allowed */}
      {/* {String(value)} */}
    </Container>
  );
};

export default TokenAmountInput;
