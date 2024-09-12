import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import SideBar from "../SideBar";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grouping}>
        <SideBar />
        <Link to="/" className={`${styles.link} ${styles.title}`}>
          <span>Chemical</span>
        </Link>
      </div>
      <Link to="/table" className={styles.link}>
        <p> Tabela Periódica</p>
      </Link>
    </header>
  );
}
