import { Backdrop, CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo } from "react";
// import { useSelector } from "react-redux";
import getDesignTokens from "../src/getDesignTokens";

const DLmodectx = createContext();

const DLmodectxProvider = (props) => {
  // const StyleRX = useSelector((state) => state.style);

  const theme = useMemo(() => createTheme(getDesignTokens("dark")), []);

  return (
    <DLmodectx.Provider value={""}>
      <ThemeProvider theme={theme}>
        {/* <Backdrop open={StyleRX.isLoading} sx={{ zIndex: 105 }}>
          <CircularProgress color="inherit" />
        </Backdrop> */}
        {props.children}
      </ThemeProvider>
    </DLmodectx.Provider>
  );
};

export { DLmodectxProvider, DLmodectx };
