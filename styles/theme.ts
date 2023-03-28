export interface ThemeProps {
  colors: {
    black: string;
    white: string;
    main: string;
    blue: string;
    red: string;
    black1B: string;
    grayF0: string;
    gray8D: string;
    grayE2: string;
    grayEA: string;
    gray70: string;
    gray37: string;
  };
  hover: {
    main: string;
    secondary: string;
  };
  typography: { bigHeading: {} };
}

export const theme: ThemeProps = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    main: "#006EFD",
    blue: "#0070f3",
    red: "#E74C5B",
    black1B: "#1B1B1B",
    grayF0: "#F0F0F0",
    gray8D: "#8D8F92",
    grayE2: "#E2E2E2",
    grayEA: "#EAEAEA",
    gray70: "#707070",
    gray37: "#372B25",
  },

  hover: {
    main: "#E2E2E2",
    secondary: "#0070f3",
  },
  typography: {
    bigHeading: {},
  },
};
