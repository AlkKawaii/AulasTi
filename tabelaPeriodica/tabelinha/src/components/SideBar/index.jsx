import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideBar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <span
        class={`material-symbols-outlined ${styles.sideMenuButton}`}
        onClick={toggleSideBar}
      >
        menu
      </span>
      <nav className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <h2>Links Úteis</h2>
        <span
          className={`material-symbols-outlined ${styles.sideMenuClose} ${styles.sideMenuButton}`}
          onClick={toggleSideBar}
        >
          close
        </span>
        <Link to="/" className={styles.link}>
          <span>Chemical</span>
        </Link>
        <Link to="/table" className={styles.link}>
          <p> Tabela Periódica</p>
        </Link>
      </nav>
    </>
  );
}
