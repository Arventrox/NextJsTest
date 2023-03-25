import styled from "styled-components";

export const StyledImageContainer = styled(({ maxWidth, maxHeight, ...props }) => <div {...props} />)`
  width: 100%;
  height: 100%;
`;
