import { StyledButton, StyledButtonText } from "./elements";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
