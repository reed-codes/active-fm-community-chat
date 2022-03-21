import Head from "next/head";

function DocumentHead() {
  return (
    <Head>
      <title>Active FM | Community Chat</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        property="og:title"
        content="Active FM - Community chat : where presenters and listeners converge"
      />
      <meta property="og:site_name" content="Active FM Community Chat" />
      <meta property="og:description" content="Fun. Engaging. Secure." />
      <link rel="icon" href="favicon.png" type="image/png"></link>
    </Head>
  );
}

export default DocumentHead;
