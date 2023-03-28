import styled, { css } from "styled-components";
import { SectionInnerHeading } from "../Typography/SectionInnerHeading";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
  variant: "outlined" | "contained" | "text";
  [propName: string]: any;
}

const outlinedVariantButton = css`
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme, color }: { theme: any; color: string }) =>
    theme.colors[color]};
  color: ${({ theme, color }: { theme: any; color: string }) =>
    theme.colors[color]};

  &:hover {
    border-color: ${({ theme }: { theme: any }) => theme.colors.main};
    background-color: ${({ theme }: { theme: any }) => theme.colors.main};
    color: ${({ theme }: { theme: any }) => theme.colors.white};
  }
`;

const containedVariantButton = css`
  background-color: ${({ theme, color }: { theme: any; color: string }) =>
    theme.colors[color]};

  &:hover {
    background-color: ${({ theme, color }: { theme: any; color: string }) =>
      theme.hover[color]};
  }
`;

const textVariantButton = css`
  background-color: transparent;
  border: none;
  border-radius: 0;
  min-width: unset;
  padding: 0 2rem;
  margin: 0 2rem;
  color: ${({ theme, color }: { theme: any; color: string }) =>
    theme.colors[color]};

  &:hover {
    color: ${({ theme }: { theme: any }) => theme.black};
    border-bottom: 1px solid ${({ theme }: { theme: any }) => theme.black};
  }
`;

const buttonVariants = {
  outlined: outlinedVariantButton,
  contained: containedVariantButton,
  text: textVariantButton,
};

export const StyledButton = styled(
  ({ color = "primary", variant = "contained", ...props }: ButtonProps) => (
    <button {...props} />
  )
)`
  font-family: sans-serif;
  overflow: hidden;
  text-align: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  min-width: 184px;
  min-height: 56px;
  padding: 16px 0;
  cursor: pointer;
  border: none;
  color: white;
  ${({ variant }: ButtonProps) => buttonVariants[variant]}
`;

export const StyledButtonText = styled(
  (props: React.ComponentProps<typeof SectionInnerHeading>) => (
    <SectionInnerHeading {...props} />
  )
)``;
