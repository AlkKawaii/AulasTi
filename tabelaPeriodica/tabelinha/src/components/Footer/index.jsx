import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>&copy; Chemical</h5>
      <div className={styles.div}>
        <h6>Feito usando</h6>
        <img
          src='https://github.com/SAWARATSUKI/KawaiiLogos/blob/main/React/React.png?raw=true'
          alt='React Logo'
        />
      </div>
      <h5>Código fonte no <a href="https://github.com/AlkKawaii/AulasTi/tree/main/tabelaPeriodica/tabelinha" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
    </footer>
  );
}
