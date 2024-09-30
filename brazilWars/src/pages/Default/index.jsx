import { Outlet } from 'react-router-dom';
import styles from './Default.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
