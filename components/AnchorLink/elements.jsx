import styled from "styled-components";

export const StyledLink = styled(({ width = 100, height = 100, ...props }) => <a {...props} />)`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  margin: 0;
  padding: 0;
  color: black;
  text-decoration: none;
  display: flex;
`;
