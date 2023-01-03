import styles from '../styles/Home.module.css';
import Main from '../components/pages/Main';
import About from '../components/pages/About';
import Certificates from '../components/pages/Certificates';
import Projects from '../components/pages/Projects';

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
      <About/>
      <Projects />
      <Certificates />
    </div>
  );
}
