import '../styles/globals.css';
import '../styles/Home.module.css';
import Head from 'next/head';

import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp;
