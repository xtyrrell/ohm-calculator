import styled from "@emotion/styled";
import CopyToClipboard from "./CopyToClipboard";

const H2 = styled.h2`
  margin: 0;
  padding: 6px 0;
  font-size: 38px;
`;

const SubtitleContainer = styled.div`
  // margin: 26px 0;
  // border-top: 3px #310f0f solid;
  display: flex;
  align-items: center;
  gap: 12px;
`

const StyledCopyButton = styled(CopyToClipboard)`
  border: 1px solid red;
  color: red;
`;

const Subtitle = ({ children }) => (
  <SubtitleContainer><H2>{children}</H2><StyledCopyButton textToCopy={window.location} copiedMessage="Link copied!">Share</StyledCopyButton></SubtitleContainer>
)

export default Subtitle

