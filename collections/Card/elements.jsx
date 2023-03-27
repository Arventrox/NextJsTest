import styled from "styled-components";
import { SectionParagraph, SectionInnerHeading, Link, ImageContainer, TextContainer } from "~/components";

export const StyledCardContainer = styled(({ maxWidth, backgroundColor, ...props }) => <div {...props} />)`
  max-width: ${({ maxWidth }) => maxWidth}rem;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0.2rem solid transparent;
  border-radius: 0.5rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ theme }) => theme.hover.secondary};

    h4 {
      color: ${({ theme }) => theme.hover.secondary};
      text-decoration: underline;
    }
  }
`;

export const StyledLink = styled(({ ...props }) => <Link {...props} />)``;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer {...props} />)`
  padding-right: 0.2rem;
`;

export const StyledImageContainer = styled(({ ...props }) => <ImageContainer maxWidth="5.2" maxHeight="5.2" {...props} />)`
  padding: 1.6rem;

  @media screen and (max-width: 1023px) {
    padding: 1.4rem;
  }
`;

export const StyledHeadingContainer = styled(({ ...props }) => <SectionInnerHeading {...props} />)`
  font-weight: 600;
  font-size: 1.22rem;
  margin: 0 0 0.1rem 0;
  padding: 0;

  @media screen and (max-width: 1023px) {
    font-size: 1.125rem;
  }
`;

export const StyledParagraph = styled(({ ...props }) => <SectionParagraph {...props} />)`
  padding-right: 2rem;
  font-weight: 450;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 0.85rem;
    margin-top: 0rem;
  }
`;

export const StyledText = styled(({ ...props }) => <span {...props} />)`
  font-weight: bold;
`;
