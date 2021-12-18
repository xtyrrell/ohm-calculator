import styled from "@emotion/styled";

const CreditsContainer = styled.div`
  margin: 56px 0;
  text-align: center;
`;

const Byline = styled.p`
  margin: 6px;
`;

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
  font-size: 24px;
  color: #f7152b;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  margin: 38px 0;
`;

const Credits = () => (
  <CreditsContainer>
    <Byline>Float Strategies is an unofficial information hub run by and for the <a href="https://float.capital">Float Capital</a> community. Major thanks to the champs behind the protocol</Byline>

    <a href="https://float.capital">
      <SkewImage
        src="./assets/images/float-capital-logo-long.svg"
        alt="Float Capital"
      />
    </a>

    <Divider />

    <SkewTextAnchor href="https://xtyrrell.com">xtyrrell(.com)</SkewTextAnchor>
    <Byline>wuz here :)</Byline>
  </CreditsContainer>
);

export default Credits;
