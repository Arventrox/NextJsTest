import styled from "styled-components";
import {
	Button,
	SectionContainer,
	SectionBigHeading,
	SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
	<SectionContainer {...props} />
))`
	align-items: center;
	background-image: url("/img/background.png");
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
`;

export const StyledGetStartedBtn = styled((props) => (
	<Button
		{...props}
		variant="contained"
		color="main"
	/>
))`
	margin-top: 4.375rem;
	padding-top: 0;
	padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
	margin: 0;
	color: black;
`;

export const StyledDescription = styled((props) => (
	<SectionSubheading {...props} />
))`
	margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
	color: black;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 6rem 0 4rem 0;
	font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
	display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => (
	<div {...props} />
))`
	max-width: 32.03rem;
	max-height: 65rem;
	width: 100%;
	height: 100%;
`;
