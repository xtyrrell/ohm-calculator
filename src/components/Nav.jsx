import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  gap: 12px;
  justify-content: center;

  padding-bottom: 26px;
  border-bottom: 3px #310f0f solid;
`;

const Nav = () => (
<StyledNav>
  <Link to="/strategies/hedged-ohm-farming">Hedged OHM Farming</Link>
  <Link to="/strategies/hedged-axs-farming">Hedged AXS Farming</Link>
</StyledNav>
)

export default Nav
