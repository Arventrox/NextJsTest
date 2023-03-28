import { Card } from "@/collections";
import { MainInterface } from "@/interfaces";
import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledSubheading,
  StyledImageContainer,
  StyledMainContainer,
  StyledCardsContainer,
  StyledImage,
} from "./elements";

export const Main = ({
  image,
  title,
  description,
  content,
  ...props
}: MainInterface) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubheading>{description}</StyledSubheading>
      </StyledTextContainer>
      <StyledMainContainer>
        <StyledImageContainer>
          {/* It uses a styled next/image from elements */}
          <StyledImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledCardsContainer>
          {content.map((item, index) => (
            <Card key={index} index={index} {...item} />
          ))}
        </StyledCardsContainer>
      </StyledMainContainer>
    </StyledContainer>
  );
};
