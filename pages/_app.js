import { ThemeProvider } from "../state/ThemeProvider";
import { ShowsProvider } from "../state/ShowsContext";
import Layout from "../components/Layout"
import "../styles/Swiper.css";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <ShowsProvider>

          <Layout>
            <Component {...pageProps} />
          </Layout>
         
    </ShowsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
