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

export const StyledMainContainer = styled(({ ...props }) => <main {...props} />)`
  grid-gap: 5rem;
  width: 70rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;

  @media screen and (max-width: 1023px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40rem;
    margin: 3rem auto;
    background-position: -5rem 1.5rem;
    background-size: 50rem;
    grid-gap: 0;
    margin: 0;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <ImageContainer {...props} />)`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 1rem;

  background-image: url("/img/background.png");
  background-size: 60rem;
  background-position: -2.5rem 2.5rem;
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    justify-content: center;
    background-position: -1rem 2.5rem;
    background-size: 52rem;
  }
`;

export const StyledImageHolder = styled(({ ...props }) => <ImageContainer {...props} />)`
  position: relative;
  max-width: 19rem;
  padding: 1rem;
  scale: 1.07 1;

  @media screen and (max-width: 1023px) {
    max-width: 17rem;
    scale: 1;
    padding: 0;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.25rem;
`;
