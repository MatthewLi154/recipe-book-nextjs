import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
