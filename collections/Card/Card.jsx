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

  useEffect(() => {
    const boldedWords = getBoldedWords(text, wordsToBold);
    setBoldedWords(boldedWords);
  }, [text, wordsToBold]);

  const getBoldedWords = (text, wordsToBold) => {
    const regex = new RegExp(wordsToBold, "gi");
    const words = text.split(regex);
    const boldedWords = words.reduce((result, word, index) => {
      if (index !== 0) result.push(<StyledText key={index}>{wordsToBold}</StyledText>);
      result.push(word);
      return result;
    }, []);

    return boldedWords;
  };

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
    <>
      {link ? (
        <StyledLink url={link.url} target={link.target}>
          <StyledCardContainer maxWidth={getMaxWidth} backgroundColor={getBackgroundColor}>
            <StyledImageContainer>
              <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </StyledImageContainer>
            <StyledTextContainer>
              <StyledHeadingContainer>{heading}</StyledHeadingContainer>
              <StyledParagraph>{boldedWords}</StyledParagraph>
            </StyledTextContainer>
          </StyledCardContainer>
        </StyledLink>
      ) : (
        <StyledCardContainer maxWidth={getMaxWidth} backgroundColor={getBackgroundColor}>
          <StyledImageContainer>
            <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </StyledImageContainer>
          <StyledTextContainer>
            <StyledHeadingContainer>{heading}</StyledHeadingContainer>
            <StyledParagraph>{boldedWords}</StyledParagraph>
          </StyledTextContainer>
        </StyledCardContainer>
      )}
    </>
  );
};
