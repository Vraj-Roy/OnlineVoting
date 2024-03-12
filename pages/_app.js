import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(100);
  const [key, setKey] = useState();
  const resetKey = () => {
    setKey(Math.random());
  };
  return (
    <>
      <meta property="og:title" content="Online Voting System" />
      <meta
        property="og:description"
        content="Vote Online Today
"
      />
      <meta property="og:image" content="/main.png" />
      <meta
        property="og:url"
        content="https://online-voting-systemm.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Online Voting System" />
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
    </>
  );
}
