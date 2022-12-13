import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sky Leilani</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <p>hi</p>
      </main>
    </div>
  );
}
