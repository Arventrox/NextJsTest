import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  SectionParagraph,
  SectionInnerHeading,
  ListItem,
  AnchorLink,
  ListContainer,
  ImageContainer,
  TextContainer,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1023px) {
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer {...props} />)`
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  color: ${({ theme }) => theme.black};
  text-align: center;
  margin: 0;
`;

export const StyledSubheading = styled((props) => <SectionSubheading {...props} />)`
  font-weight: 400;
  margin: 0;
`;

export const StyledImageContainer = styled(({ scale = 1, ...props }) => <ImageContainer {...props} />)`
  scale: ${({ scale }) => scale};

  /* @media screen and (max-width: 1023px) {
    max-width: 16rem;
    max-height: 32rem;
  } */
`;

export const StyledArticleContainer = styled(({ ...props }) => <SectionContainer {...props} />)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  background-image: url("/img/background.png");
  background-size: contain;
  background-position: 8rem;
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    background-position: -5rem 1.5rem;
    background-size: 50rem;
  }
`;

export const StyledListContainer = styled(({ ...props }) => <ListContainer {...props} />)`
  display: grid;
  grid-auto-flow: row dense;
  grid-gap: 2rem;
`;

export const StyledListItem = styled(({ ...props }) => <ListItem {...props} />)``;

export const StyledLink = styled(({ ...props }) => <AnchorLink {...props} />)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledSectionInnerHeading = styled(({ ...props }) => <SectionInnerHeading {...props} />)`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
`;

export const StyledParagraph = styled(({ ...props }) => <SectionParagraph {...props} />)`
  padding-right: 2rem;
  font-weight: 450;
`;

export const StyledText = styled(({ ...props }) => <span {...props} />)`
  font-weight: bold;
`;
