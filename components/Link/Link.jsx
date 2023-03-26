import { StyledLink } from "./elements";

export const Link = ({ children, url, target }) => {
  return (
    <StyledLink href={url} target={target}>
      {children}
    </StyledLink>
  );
};
