import Head from 'next/head'

import Newsletter from "./Newsletter.js";

function App() {
  return (
    <div className="app__newsletter">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>CSS-in-JS Example</title>
      </Head>
      <Newsletter />
      <style jsx>{`
        .app__newsletter {
          display: flex;
          justify-content: center;
          padding: 4rem 0;
        }
      `}</style>
    </div>
  );
}

export default App;
