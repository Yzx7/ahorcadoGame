import "../shared/styles/globals.css";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { DLmodectxProvider } from "../contexts/DarkLightModeCtx";
// import "@splidejs/splide/dist/css/splide.min.css";
// import "nprogress/nprogress.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <DLmodectxProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <Component {...pageProps} />
        {/* </LocalizationProvider> */}
      </DLmodectxProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
