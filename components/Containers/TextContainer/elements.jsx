import styled from "styled-components";

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  display: flex;
  align-items: ${({ align }) => align};
`;

StyledTextContainer.defaultProps = {
  align: "center",
};
