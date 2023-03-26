import styled from "styled-components";

export const StyledLink = styled(({ ...props }) => <a {...props} />)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
