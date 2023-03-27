import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading, TextContainer, ImageContainer } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    margin: 5rem 0 35rem 0;
  }
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;

  @media screen and (max-width: 680px) {
    margin: 2.375rem auto;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer {...props} />)`
  width: 30%;
  margin-left: 11.125rem;

  @media screen and (max-width: 1023px) {
    margin-left: 4.125rem;
  }

  @media screen and (max-width: 680px) {
    width: fit-content;
    margin-left: 0rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <ImageContainer maxWidth="32.03" maxHeight="65" {...props} />)`
  margin-left: auto;
  flex-basis: 37%;

  @media screen and (max-width: 680px) {
    clip-path: inset(19rem 0 9rem 0);
    position: absolute;
    top: 20%;
    max-width: 68rem;
  }
`;
