import { Outlet } from 'react-router-dom';
import styles from './Default.module.css';
import Header from '../../components/Header';

export default function Default() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
}
