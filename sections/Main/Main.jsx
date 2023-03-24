import Image from "next/image";

import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledSubheading,
  StyledImageContainer,
  StyledArticleContainer,
  StyledListContainer,
  StyledListItem,
  StyledLink,
  StyledSectionInnerHeading,
  StyledParagraph,
  StyledText,
} from "./elements";

export const Main = ({ image, title, description, content, ...props }) => {
  const boldWords = (description, wordsToBold) => {
    const regex = new RegExp(wordsToBold, "gi");
    const words = description.split(regex);
    const boldedWords = words.reduce((result, word, index) => {
      if (index !== 0) {
        result.push(<StyledText key={index}>{wordsToBold}</StyledText>);
      }
      result.push(word);

      return result;
    }, []);

    return boldedWords;
  };

  return (
    <StyledContainer {...props} topMargin="8" bottomMargin="5">
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubheading>{description}</StyledSubheading>
      </StyledTextContainer>
      <StyledArticleContainer topMargin="3">
        <StyledImageContainer maxWidth={image.maxWidth} maxHeight={image.maxHeight}>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledListContainer>
          {content.map((item, index) => (
            <StyledListItem key={index} maxWidth={item.maxWidth} backgroundColor={item.backgroundColor}>
              <StyledLink href={item.link} target="_blank">
                <StyledImageContainer maxWidth={item.image.maxWidth} maxHeight={item.image.maxHeight} scale="0.6">
                  <Image
                    layout="responsive"
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                  />
                </StyledImageContainer>
                <StyledTextContainer align="left">
                  <StyledSectionInnerHeading>{item.title}</StyledSectionInnerHeading>
                  <StyledParagraph>{boldWords(item.description, item.wordsToBold)}</StyledParagraph>
                </StyledTextContainer>
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledListContainer>
      </StyledArticleContainer>
    </StyledContainer>
  );
};
