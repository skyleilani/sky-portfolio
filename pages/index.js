import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import Main from '../components/pages/Main';
import About from '../components/pages/About';
import Certificates from '../components/pages/Certificates';

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
      <About />
      <Certificates />
    </div>
  );
}
