import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import {
  StyledTextContainer,
  StyledImageContainer,
  StyledCardContainer,
  StyledLink,
  StyledHeadingContainer,
  StyledParagraph,
  StyledText,
} from "./elements";

export const Card = ({ image, heading, text, wordsToBold, link, index }) => {
  const [boldedWords, setBoldedWords] = useState();
  const isAbove1024px = useMediaQuery("(min-width: 1023px)");
  const isTargetLink = link && "_blank";

  useEffect(() => {
    const regex = new RegExp(wordsToBold, "gi");
    const words = text.split(regex);
    const boldedWords = words.reduce((result, word, index) => {
      if (index !== 0) result.push(<StyledText key={index}>{wordsToBold}</StyledText>);
      result.push(word);
      return result;
    }, []);
    setBoldedWords(boldedWords);
  }, [text, wordsToBold]);

  const getMaxWidth = () => {
    const initialMaxWidth = isAbove1024px ? 27 : 24;
    const increment = 1.5;
    return initialMaxWidth + index * increment;
  };

  const getBackgroundColor = () => {
    const backgroundColors = ["#f9f9f9", "#f4f4f4", "#f1f1f1"];
    return backgroundColors[index % backgroundColors.length];
  };

  return (
    <StyledCardContainer maxWidth={getMaxWidth} backgroundColor={getBackgroundColor}>
      <StyledLink href={link} target={isTargetLink} link={link}>
        <StyledImageContainer maxWidth={image.maxWidth} maxHeight={image.maxHeight}>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledTextContainer align="left">
          <StyledHeadingContainer>{heading}</StyledHeadingContainer>
          <StyledParagraph>{boldedWords}</StyledParagraph>
        </StyledTextContainer>
      </StyledLink>
    </StyledCardContainer>
  );
};
