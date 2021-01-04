type themeFactoryColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  // success: string;
  error2: string;
  caret?: string;
};

// todo add success

export function themeFactory(colors: themeFactoryColors) {
  return {
    colors: {
      ...colors,
      caret: colors.caret ?? colors.primary,
    },
  };
}

// export const def = {
//   colors: {
//     main: '#e2b714',
//     secondary: '#e2b714',
//     alt
//     error: '#e2b714',
//     error2: '#e2b714',
//   },
// };
