import { Link } from 'react-router-dom';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to='/' className={`${styles.link} ${styles.title}`}>
        <span>Chemical</span>
      </Link>
      <Link to='/table' className={styles.link}>
        <p> Tabela Periódica</p>
      </Link>
    </header>
  );
}
