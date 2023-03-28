import styled from "styled-components";
import Image from "next/image";

import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  TextContainer,
} from "@/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const StyledGetStartedBtn = styled((props) => (
  <Button {...props} variant="contained" color="main" />
))`
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

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <TextContainer {...props} />
))`
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

export const StyledImage = styled(({ src, alt, width, height, ...props }) => (
  <Image src={src} alt={alt} width={width} height={height} {...props} />
))`
  margin-left: auto;
  position: relative;
  max-height: 100vh;
  max-width: 33%;

  @media screen and (max-width: 1023px) {
    max-width: 50%;
  }

  @media screen and (max-width: 680px) {
    margin: 0 auto;
    max-width: 80%;
    max-height: 20rem;
  }
`;
