import styled from "styled-components";

export const StyledTextContainer = styled(
  ({ alignItems, alignText, ...props }) => <div {...props} />
)`
  color: ${({ theme }) => theme.black};
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: center;
  text-align: ${({ alignText }) => alignText}; ;
`;

StyledTextContainer.defaultProps = {
  alignItems: "left",
  alignText: "left",
};
