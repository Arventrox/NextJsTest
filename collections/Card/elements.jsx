import styled from "styled-components";
import { SectionParagraph, SectionInnerHeading, AnchorLink, ImageContainer, TextContainer } from "~/components";

export const StyledCardContainer = styled(({ maxWidth, backgroundColor, ...props }) => <div {...props} />)`
  max-width: ${({ maxWidth }) => maxWidth}rem;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.hover.secondary};

    h4 {
      color: ${({ theme }) => theme.hover.secondary};
      text-decoration: underline;
    }
  }
`;

export const StyledLink = styled(({ link, ...props }) => (link ? <AnchorLink {...props} /> : <div {...props} />))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer {...props} />)`
  flex-direction: column;
  justify-content: center;
`;

export const StyledImageContainer = styled(({ ...props }) => <ImageContainer {...props} />)`
  max-width: 6rem;
  max-height: 6rem;
  padding: 1.5rem;

  @media screen and (max-width: 1023px) {
    max-width: 5rem;
    max-height: 5rem;
  }
`;

export const StyledHeadingContainer = styled(({ ...props }) => <SectionInnerHeading {...props} />)`
  font-weight: 650;
  font-size: 1.3rem;
  margin: 0;
  margin-top: 1rem;
  padding: 0;

  @media screen and (max-width: 1023px) {
    font-size: 1.125rem;
  }
`;

export const StyledParagraph = styled(({ ...props }) => <SectionParagraph {...props} />)`
  padding-right: 2rem;
  font-weight: 450;

  @media screen and (max-width: 1023px) {
    font-size: 0.85rem;
    margin-top: 0rem;
  }
`;

export const StyledText = styled(({ ...props }) => <span {...props} />)`
  font-weight: bold;
`;
