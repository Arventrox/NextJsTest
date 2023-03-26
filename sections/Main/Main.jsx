import Image from "next/image";
import { Card } from "~/collections";

import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledSubheading,
  StyledImageContainer,
  StyledMainContainer,
  StyledCardsContainer,
  StyledImageHolder,
} from "./elements";

export const Main = ({ image, title, description, content }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubheading>{description}</StyledSubheading>
      </StyledTextContainer>
      <StyledMainContainer>
        <StyledImageContainer>
          <StyledImageHolder>
            <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </StyledImageHolder>
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
