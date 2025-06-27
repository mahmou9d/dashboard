export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          myColor: {
            main: "#F6F9FC",
          },
        }
      : {
          // palette values for dark mode
          myColor: {
            main: "#252b32",
          },
        }),
  },
});
