import dynamic from "next/dynamic";
import { ThemeProvider } from "../state/ThemeProvider";
import "../styles/Swiper.css";
import "../styles/globals.css";

const Layout = dynamic(() => import("../components/Layout").then((mod) => mod));

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
