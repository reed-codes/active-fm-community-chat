import dynamic from "next/dynamic";
import { ThemeProvider } from "../state/ThemeProvider";
import { ShowsProvider } from "../state/ShowsContext";
import { ParallaxProvider } from 'react-scroll-parallax';
import "../styles/Swiper.css";
import "../styles/globals.css";


const Layout = dynamic(() => import("../components/Layout").then((mod) => mod));

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
    <ThemeProvider>
    <ShowsProvider>

          <Layout>
            <Component {...pageProps} />
          </Layout>
         
    </ShowsProvider>
    </ThemeProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
