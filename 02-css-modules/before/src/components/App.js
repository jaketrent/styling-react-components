import Head from "next/head";

import Newsletter from "./Newsletter.js";

function App() {
  return (
    <div className="app__newsletter">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>CSS Modules Example</title>
      </Head>
      <Newsletter />
    </div>
  );
}

export default App;
