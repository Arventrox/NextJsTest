import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks";
import {
  ImageInterface,
  LinkInterface,
  ContentItemInterface,
} from "@/interfaces";

import {
  StyledTextContainer,
  StyledCardContainer,
  StyledLink,
  StyledHeadingContainer,
  StyledImage,
  StyledParagraph,
  StyledText,
} from "./elements";

interface CardInterface extends ContentItemInterface {
  index: number;
}

export const Card = ({
  image,
  heading,
  text,
  wordsToBold,
  link,
  index,
}: CardInterface) => {
  const [boldedWords, setBoldedWords] = useState<React.ReactNode | null>(null);
  const isAbove1024px = useMediaQuery("(min-width: 1023px)");

  useEffect(() => {
    const boldedWords: React.ReactNode = getBoldedWords(text, wordsToBold);
    setBoldedWords(boldedWords);
  }, [text, wordsToBold]);

  const getBoldedWords = (text: string, wordsToBold: string) => {
    const regex = new RegExp(wordsToBold, "gi");
    const words = text.split(regex);
    const boldedWords = words.reduce(
      (result: React.ReactNode[], word, index) => {
        if (index !== 0)
          result.push(<StyledText key={index}>{wordsToBold}</StyledText>);
        result.push(word);
        return result;
      },
      []
    );

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
          <StyledCardContainer
            maxWidth={getMaxWidth}
            backgroundColor={getBackgroundColor}
          >
            <StyledImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
            <StyledTextContainer>
              <StyledHeadingContainer>{heading}</StyledHeadingContainer>
              <StyledParagraph>{boldedWords}</StyledParagraph>
            </StyledTextContainer>
          </StyledCardContainer>
        </StyledLink>
      ) : (
        <StyledCardContainer
          maxWidth={getMaxWidth}
          backgroundColor={getBackgroundColor}
        >
          <StyledImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <StyledTextContainer>
            <StyledHeadingContainer>{heading}</StyledHeadingContainer>
            <StyledParagraph>{boldedWords}</StyledParagraph>
          </StyledTextContainer>
        </StyledCardContainer>
      )}
    </>
  );
};
