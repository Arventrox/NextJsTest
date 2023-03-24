import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionParagraph, SectionInnerHeading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  max-width: 23.015rem;
  max-height: 46.5rem;
  width: 100%;
  height: 100%;
`;

export const StyledContentContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url("/img/background.png");
  background-size: contain;
  background-position: 20%;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 5rem;
`;

export const StyledItemsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;

  & > :nth-child(1) {
    width: 33rem;
    background-color: #f9f9f9;
  }

  & > *:nth-child(2) {
    width: 35rem;
    background-color: #f4f4f4;
  }

  & > *:nth-child(3) {
    width: 37rem;
    background-color: #f1f1f1;
  }
`;

export const StyledItems = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grayF0};
  margin: 1rem;
  border-radius: 0.5rem;

  &:hover {
    border: 2px solid ${({ theme }) => theme.hover.secondary};

    h4 {
      color: ${({ theme }) => theme.hover.secondary};
      text-decoration: underline;
    }
  }
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
`;

export const StyledSectionInnerHeading = styled(({ ...props }) => <SectionInnerHeading {...props} />)`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0;
  margin-top: 1rem;
`;

export const StyledParagraph = styled(({ ...props }) => <SectionParagraph {...props} />)`
  padding-right: 2rem;
`;

export const StyledWord = styled(({ ...props }) => <span {...props} />)`
  font-weight: bold;
`;
