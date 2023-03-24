import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledContentContainer,
  StyledItemsContainer,
  StyledItems,
  StyledImageSubContainer,
  StyledTextSubContainer,
  StyledSectionInnerHeading,
  StyledParagraph,
  StyledWord,
} from "./elements";

export const Main = ({ image, title, description, content, ...props }) => {
  const boldWords = (description, wordsToBold) => {
    const regex = new RegExp(wordsToBold, "gi");
    const words = description.split(regex);
    const boldedWords = words.reduce((result, word, index) => {
      if (index !== 0) {
        result.push(<StyledWord key={index}>{wordsToBold}</StyledWord>);
      }
      result.push(word);

      return result;
    }, []);

    return boldedWords;
  };

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledContentContainer>
        <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledItemsContainer>
          {content.map((item, index) => (
            <StyledItems key={index} {...props}>
              <StyledImageSubContainer>
                <Image
                  layout="responsive"
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
              </StyledImageSubContainer>
              <StyledTextSubContainer>
                <StyledSectionInnerHeading>{item.title}</StyledSectionInnerHeading>
                <StyledParagraph>{boldWords(item.description, item.wordsToBold)}</StyledParagraph>
              </StyledTextSubContainer>
            </StyledItems>
          ))}
        </StyledItemsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
