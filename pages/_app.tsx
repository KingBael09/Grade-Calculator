import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Poppins, JetBrains_Mono } from "@next/font/google";

const defaultFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const codeFont = JetBrains_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${defaultFont.style.fontFamily};
            --codeFont: ${codeFont.style.fontFamily};
            --defaultFont: ${defaultFont.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
