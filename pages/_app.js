import '../styles/globals.css';
import '../styles/Home.module.css';
import Head from 'next/head';

import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
   <>
    <Head>
     <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,400&family=Raleway:wght@300&family=Sora:wght@100;200&display=swap'
          rel='stylesheet'
        />
      </Head>
      <NavBar />
    <Component {...pageProps} />
   </>
  );
}

export default MyApp;
