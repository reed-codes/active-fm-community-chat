import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="active.fm" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:image" content="https://www.activefm.co.za/img/Banner%202.png" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/icons/logo.png" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.2/dist/locomotive-scroll.min.css"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Active FM",
  keywords:
    "radio, shows, radio shows, podcasts, podcast, christian, christian content, christian radio",
  description: "radio has never been better",
};

export default Meta;
