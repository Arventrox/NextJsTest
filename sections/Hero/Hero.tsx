import { useMediaQuery } from "@/hooks";
import { HeroInterface, ImageInterface } from "@/interfaces";
import { useEffect, useState } from "react";
import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImage,
} from "./elements";

export const Hero = ({
  image: images,
  title,
  description,
  ctaText,
  ...props
}: HeroInterface) => {
  const [image, setImage] = useState<ImageInterface>(images.large);
  const isBellow680px = useMediaQuery("(max-width: 680px)");

  useEffect(() => {
    isBellow680px ? setImage(images.small) : setImage(images.large);
  }, [isBellow680px, images]);

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledCTAContainer>
          <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
        </StyledCTAContainer>
      </StyledTextContainer>
      <StyledImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
      />
    </StyledContainer>
  );
};
