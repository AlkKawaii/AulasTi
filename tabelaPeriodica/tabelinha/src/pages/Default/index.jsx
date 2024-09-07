import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Default.module.css';

export default function Default() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
