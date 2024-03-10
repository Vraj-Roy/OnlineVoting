import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(100);
  const[key,setKey]=useState();
  const resetKey=()=>{
    setKey(Math.random());
  } 
  return (

    <>
     <LoadingBar
        color='#3B82F6'
        progress={progress}
        height={4}
        transitionTime={400}
        loaderSpeed={300}
        shadow={true}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar resetKey={resetKey} key={key} setProgress ={setProgress} />
    <Component {...pageProps} resetKey={resetKey} setProgress ={setProgress}/>
    </>
  )
  
}
