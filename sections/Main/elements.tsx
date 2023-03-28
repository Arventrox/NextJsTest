import styled from "styled-components";
import Image from "next/image";

import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  TextContainer,
} from "@/components";

export const StyledContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7.5rem auto;

  @media screen and (max-width: 1023px) {
    margin: 2rem auto;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <TextContainer alignItems="center" alignText="center" {...props} />
))`
  margin-bottom: 2rem;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.2;

  @media screen and (max-width: 1023px) {
    font-size: 2.2rem;
  }
`;

export const StyledSubheading = styled((props) => (
  <SectionSubheading {...props} />
))`
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 1.1rem;
  }
`;

export const StyledMainContainer = styled(({ ...props }) => (
  <main {...props} />
))`
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

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  justify-content: right;
  padding: 1rem;

  background-image: url("/img/background.png");
  background-size: 60rem;
  background-position: -5rem 2.5rem;
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    width: 100%;
    justify-content: center;
    background-position: -3.5rem 2.5rem;
    background-size: 52rem;
  }
`;

export const StyledImage = styled(({ src, alt, width, height, ...props }) => (
  <Image src={src} alt={alt} width={width} height={height} {...props} />
))`
  position: relative;
  max-width: 20rem;
  max-height: 32rem;
  padding: 1rem;

  @media screen and (max-width: 1023px) {
    max-width: 18rem;
    max-height: 29rem;
    padding: 0;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => (
  <article {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.25rem;
`;
