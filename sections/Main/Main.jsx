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
  const { item1, item2, item3 } = content;

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
        <StyledItemsContainer {...props}>
          <StyledItems>
            <StyledImageSubContainer>
              <Image
                layout="responsive"
                src={item1.image.src}
                alt={item1.image.alt}
                width={item1.image.width}
                height={item1.image.height}
              />
            </StyledImageSubContainer>
            <StyledTextSubContainer>
              <StyledSectionInnerHeading>{item1.title}</StyledSectionInnerHeading>
              <StyledParagraph>{boldWords(item1.description, item1.wordsToBold)}</StyledParagraph>
            </StyledTextSubContainer>
          </StyledItems>
          <StyledItems>
            <StyledImageSubContainer>
              <Image
                layout="responsive"
                src={content.item2.image.src}
                alt={content.item2.image.alt}
                width={content.item2.image.width}
                height={content.item2.image.height}
              />
            </StyledImageSubContainer>
            <StyledTextSubContainer>
              <StyledSectionInnerHeading>{item2.title}</StyledSectionInnerHeading>
              <StyledParagraph> {boldWords(item2.description, item2.wordsToBold)}</StyledParagraph>
            </StyledTextSubContainer>
          </StyledItems>
          <StyledItems>
            <StyledImageSubContainer>
              <Image
                layout="responsive"
                src={content.item3.image.src}
                alt={content.item3.image.alt}
                width={content.item3.image.width}
                height={content.item3.image.height}
              />
            </StyledImageSubContainer>
            <StyledTextSubContainer>
              <StyledSectionInnerHeading>{item3.title}</StyledSectionInnerHeading>
              <StyledParagraph> {boldWords(item3.description, item3.wordsToBold)}</StyledParagraph>
            </StyledTextSubContainer>
          </StyledItems>
        </StyledItemsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
