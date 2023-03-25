import styled from "styled-components";

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  display: flex;
  align-items: ${({ align }) => align};
  flex-direction: column;
  justify-content: center;
`;

StyledTextContainer.defaultProps = {
  align: "center",
};
