/* eslint-disable react/display-name */
import { forwardRef, Ref } from "react";
import { StyledSectionSubheading } from "./elements";

export const SectionSubheading = forwardRef(
  ({ ...props }, ref: Ref<HTMLHeadingElement>) => {
    return <StyledSectionSubheading {...props} ref={ref} />;
  }
);
