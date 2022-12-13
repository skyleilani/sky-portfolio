import Head from 'next/head'
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
         <title>Sky Leilani</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
       <p> home </p>
      </main>
    </div>
  );
}
