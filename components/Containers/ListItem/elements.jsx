import styled from "styled-components";

export const StyledListItem = styled(({ maxWidth = 0, margin = 0, padding = 0, color, backgroundColor, ...props }) => (
  <li {...props} />
))`
  margin: ${({ margin }) => margin}rem;
  padding: ${({ padding }) => padding}rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}%;
  border: 2px solid transparent;
  text-decoration: none;
  border-radius: 0.5rem;

  &:hover {
    border-color: ${({ theme }) => theme.hover.secondary};

    h4 {
      color: ${({ theme }) => theme.hover.secondary};
      text-decoration: underline;
    }
  }
`;
