import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import { useEffect, useRef, useState } from 'react';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);
  function toggleSideBar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <span
        className={`material-symbols-outlined ${styles.sideMenuButton}`}
        onClick={toggleSideBar}>
        menu
      </span>
      <nav
        className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}
        ref={sideBarRef}>
        <h2>Links Úteis</h2>
        <span
          className={`material-symbols-outlined ${styles.sideMenuClose} ${styles.sideMenuButton}`}
          onClick={toggleSideBar}>
          close
        </span>
        <Link to='/' className={styles.link}>
          <span>Chemical</span>
        </Link>
        <Link to='/table' className={styles.link}>
          <p> Tabela Periódica</p>
        </Link>
      </nav>
    </>
  );
}
