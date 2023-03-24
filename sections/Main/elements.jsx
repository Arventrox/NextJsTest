import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  SectionParagraph,
  SectionInnerHeading,
  ListItem,
} from "~/components";
import { ListContainer } from "../../components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1023px) {
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  font-weight: 400;
  margin: 0;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 23rem;
  max-height: 46rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1023px) {
    max-width: 16rem;
    max-height: 32rem;
  }
`;

export const StyledContentContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url("/img/background.png");
  background-size: contain;
  background-position: 8rem;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 5rem;

  @media screen and (max-width: 1023px) {
    background-position: -5rem 1.5rem;
    background-size: 50rem;
  }
`;

export const StyledItemsContainer = styled(({ ...props }) => <ListContainer {...props} />)`
  display: grid;
  grid-auto-flow: row dense;
  grid-gap: 2rem;

  /* & > :nth-child(1) {
    max-width: 31rem;
    background-color: #f9f9f9;
  }

  & > *:nth-child(2) {
    max-width: 33rem;
    background-color: #f4f4f4;
  }

  & > *:nth-child(3) {
    max-width: 35rem;
    background-color: #f1f1f1;
  } */
`;

export const StyledItems = styled(({ ...props }) => <ListItem {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledImageSubContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 10rem;
  max-height: 10rem;
  width: 100%;
  height: 100%;
  scale: 0.6;
`;

export const StyledTextSubContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
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

export const StyledWord = styled(({ ...props }) => <span {...props} />)`
  font-weight: bold;
`;
