import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  const isBellow680px = useMediaQuery("(max-width: 680px)");

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledCTAContainer>
          <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
        </StyledCTAContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        {isBellow680px ? (
          <Image layout={"fill"} src={image.src} alt={image.alt} priority />
        ) : (
          <Image layout={"responsive"} src={image.src} alt={image.alt} width={image.width} height={image.height} priority />
        )}
      </StyledImageContainer>
    </StyledContainer>
  );
};
