import styled from "@emotion/styled";

const CreditsContainer = styled.div`
  margin: 56px 0;
  text-align: center;

  /* overflow: hidden; */
`;

const Byline = styled.p``;

const SkewImage = styled.img`
  transform: rotate(${({ degrees }) => degrees || "-4"}deg);
  max-width: 250px;
  margin: 8px auto;
`;

const SkewTextAnchor = styled.a`
  transform: rotate(${({ degrees }) => degrees || "4"}deg);
  margin: 8px auto;
  display: block;
  text-decoration: none;
  font-size: 32px;
  color: #f7152b;

  &:hover {
    text-decoration: underline;
  }
`;

const Credits = () => (
  <CreditsContainer>
    <Byline>thanks to the original protocol champs</Byline>

    <a href="https://float.capital">
      <SkewImage
        src="./assets/images/float-capital-logo-long.svg"
        alt="Float Capital"
      />
    </a>

    <Byline>this calculator website was built by</Byline>

    <SkewTextAnchor href="https://xtyrrell.com">xtyrrell(.com)</SkewTextAnchor>
  </CreditsContainer>
);

export default Credits;
