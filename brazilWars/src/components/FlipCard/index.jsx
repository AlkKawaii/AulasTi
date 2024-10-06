import styles from './FlipCard.module.css';
import { forwardRef } from 'react';

const FlipCard = forwardRef(({ info }, ref) => {
  return (
    <div className={styles.flipCard} ref={ref}>
      <section className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={info.image} alt={`Imagem ${info.title}`} />
          <h2>{info.title}</h2>
        </div>
        <article className={styles.flipCardBack}>{info.year}</article>
      </section>
    </div>
  );
});

export default FlipCard;
