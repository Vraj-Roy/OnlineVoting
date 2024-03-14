import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(100);
  const [key, setKey] = useState();
  const resetKey = () => {
    setKey(Math.random());
  };
  return (
    <>
      <Head>
        <meta property="og:title" content="Online Voting System" />
        <meta
          property="og:description"
          content="Vote Online Today
"
        />
        <meta
          property="og:image"
          content="https://online-voting-systemm.vercel.app/main.png"
        />
        <meta
          property="og:url"
          content="https://online-voting-systemm.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Online Voting System" />
      </Head>
      <LoadingBar
        color="#3B82F6"
        progress={progress}
        height={4}
        transitionTime={400}
        loaderSpeed={300}
        shadow={true}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar resetKey={resetKey} key={key} setProgress={setProgress} />
      <Component {...pageProps} resetKey={resetKey} setProgress={setProgress} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
