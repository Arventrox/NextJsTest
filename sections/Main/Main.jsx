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
} from "./elements";

export const Main = ({ image, title, description, content }, ...props) => {
  const styledContainerTopMargin = 5;
  const styledContainerBottomMargin = 10;
  const styledMainContainerTopMargin = 3;

  return (
    <StyledContainer topMargin={styledContainerTopMargin} bottomMargin={styledContainerBottomMargin} {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubheading>{description}</StyledSubheading>
      </StyledTextContainer>
      <StyledMainContainer topMargin={styledMainContainerTopMargin}>
        <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
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
