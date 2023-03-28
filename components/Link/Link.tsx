import { StyledLink } from "./elements";
import { LinkInterface } from "@/interfaces";

interface Link extends LinkInterface {
  children: React.ReactNode;
}

export const Link = ({ children, url, target }: Link) => {
  return (
    <StyledLink href={url} target={target}>
      {children}
    </StyledLink>
  );
};
