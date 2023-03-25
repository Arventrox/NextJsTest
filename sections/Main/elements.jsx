import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, ImageContainer, TextContainer } from "~/components";

export const StyledContainer = styled(({ ...props }) => <SectionContainer {...props} />)`
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1023px) {
    margin: 2rem 0;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer {...props} />)`
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  text-align: center;
  line-height: 1.2;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 2.2rem;
  }
`;

export const StyledSubheading = styled((props) => <SectionSubheading {...props} />)`
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 1.1rem;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <ImageContainer {...props} />)`
  max-width: 20.5rem;
  max-height: 41rem;

  @media screen and (max-width: 1023px) {
    max-width: 18rem;
    max-height: 36rem;
  }
`;

export const StyledMainContainer = styled(({ ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  justify-content: center;
  gap: 5rem;

  background-image: url("/img/background.png");
  background-size: contain;
  background-position: 13.5rem 1.5rem;
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    width: 60%;
    margin: 3rem auto;
    background-position: -5rem 1.5rem;
    background-size: 50rem;
    gap: 4rem;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
