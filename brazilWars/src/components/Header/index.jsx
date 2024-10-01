import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({}) {
  const oldScrollRef = useRef(window.scrollY);
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add(styles.show);
    }

    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > oldScrollRef.current) {
        headerRef.current.classList.remove(styles.show);
      } else {
        headerRef.current.classList.add(styles.show);
      }
      oldScrollRef.current = window.scrollY;
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <Link className={styles.link} to='/'>
        <span>Brazil Wars</span>
      </Link>
      <Link className={styles.link} to='wars'>
        <span>Lista de Guerras</span>
      </Link>
    </header>
  );
}
