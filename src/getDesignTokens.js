import { amber, blue, brown, grey, red } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...blue,
      ...(mode === "dark" && {
        main: blue[300],
      }),
    },

    background: {
      ...(mode === "dark"
        ? {
            default: "#181111",
            bglvl1: "#111219",
            bglvl3: "#202336",
            bglvl3Hover: "#2e3351",
            bgBNlvl1: "hsl(0deg 0% 100% / 5%)",
            bgBNlvl1Hover: "hsl(0deg 0% 100% / 10%)",
            paper: "#202336",
            paper02: "#2b2e40",
            paper01hover: "#2c325e",
            subMainPaper: "#1f212c",
            subpaper: "#212229",
            buttonSt: "#ffffff1c",
            button01: "#323546",
            MainNav: "#fff0",
          }
        : {
            default: "#fff0ed",
            bglvl1: "#e7e7f2",
            bglvl3: "#fff",
            bglvl3Hover: "#e9e9ef",
            bgBNlvl1: "hsl(0deg 0% 0% / 5%)",
            bgBNlvl1Hover: "hsl(0deg 0% 0% / 10%)",
            paper: "#fff",
            paper02: "#e1e7ff",
            paper01hover: "#dfebff",
            subMainPaper: "#f6f6fc",
            subpaper: "#efeffe",
            buttonSt: "#00000017",
            button01: "#f4f4f4",
            MainNav: "#fff0",
          }),
    },
    transition: {
      normal: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      cubicBdef: "cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s",
    },
    error: {
      main: red.A400,
    },
    secondary: {
      main: "#19857b",
    },

    text: {
      ...(mode === "light"
        ? {
            def: "#000",
            primary: "#652105",
            secondary: grey[500],
            primaryAlt: "#fff",
          }
        : {
            def: "#fff",
            primary: "#fff",
            secondary: grey[500],
            primaryAlt: grey[900],
          }),
    },
  },

  typography: { fontFamily: "'Poppins', sans-serif" },
});

export default getDesignTokens;
