import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, ImageContainer, TextContainer } from "~/components";

export const StyledContainer = styled(({ ...props }) => <SectionContainer {...props} />)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 7.5rem auto;

  @media screen and (max-width: 1023px) {
    margin: 2rem auto;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer alignItems="center" {...props} />)``;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.2;

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

export const StyledMainContainer = styled(({ ...props }) => <main {...props} />)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  width: fit-content;
  position: relative;
  right: 5rem;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto;
    grid-gap: 0;
    margin: 0;
    right: 0;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <ImageContainer {...props} />)`
  display: flex;
  justify-content: right;
  padding: 1rem;

  background-image: url("/img/background.png");
  background-size: 60rem;
  background-position: -4rem 2.5rem;
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    justify-content: center;
    background-position: -3rem 2.5rem;
    background-size: 52rem;
    padding: 1rem 5rem;
  }
`;

export const StyledImageHolder = styled(({ ...props }) => <ImageContainer {...props} />)`
  max-width: 19rem;
  padding: 1rem;
  position: relative;

  @media screen and (max-width: 1023px) {
    max-width: 17rem;
    padding: 0;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => <article {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.25rem;
`;
