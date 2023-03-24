import styled from "styled-components";

export const StyledLink = styled(({ width = 100, height = 100, ...props }) => <a {...props} />)`
  margin: 0;
  padding: 0;
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
`;
