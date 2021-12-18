import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { copyTextToClipboard } from "./utils"

const StyleResetButton = styled.button`
  overflow: visible;
  width: auto;
  font-size: 1em;
  text-align: left;
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  color: var(--colour-base);

  font-family: var(--font-primary)

  -moz-user-select: text;

  span {
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    background: none;
    outline: none;
  }

  &:enabled:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const CopyToClipboardButton = styled(StyleResetButton)`
  border: 2px solid var(--colour-base);
  border-radius: 8px;
  padding: 8px;
  height: unset;
`;

const CopyToClipboard = ({ textToCopy, clearResultTimeout=4000, children }) => {
  const [result, setResult] = useState()

  const onClick = () => {
    const res = copyTextToClipboard(textToCopy)

    res.then(
      () => setResult("Copied!")
    ).catch(
      () => setResult("Could not copy :(")
    )
  }

  useEffect(() => {
    if (!result) return;

    const timeout = setTimeout(() => {
      setResult()
    }, clearResultTimeout)

    return () => {
      clearTimeout(timeout)
    }
  }, [result])
  
  return (<CopyToClipboardButton onClick={onClick} disabled={!!result}>{result ? result : children}</CopyToClipboardButton>)
};

export default CopyToClipboard;
