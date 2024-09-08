import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <h5>&copy; Chemical</h5>
      <span>
        <h6>Feito usando</h6>
        <img
          src='https://github.com/SAWARATSUKI/KawaiiLogos/blob/main/React/React.png?raw=true'
          alt='React Logo'
        />
      </span>
    </footer>
  );
}
