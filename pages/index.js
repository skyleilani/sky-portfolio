import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import Main from '../components/pages/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}
