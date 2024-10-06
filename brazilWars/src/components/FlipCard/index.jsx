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
        <article className={styles.flipCardBack}>
          <div className={styles.title}>
            <h2>{info.title}</h2>
            <span>{info.year}</span>
          </div>
          <details>
            <summary>Descrição</summary>
            <p>{info.description}</p>
          </details>
          <details>
            <summary>Principais conflitos</summary>
            <ul>
              {info.mainBattles.map((battle, index) => {
                return (
                  <li key={index} className={styles.subItem}>
                    {battle}
                  </li>
                );
              })}
            </ul>
          </details>
          <details>
            <summary>Curiosidades</summary>
            <ul>
              {info.curiosities.map((curiosity, index) => {
                return (
                  <li key={index} className={styles.subItem}>
                    {curiosity}
                  </li>
                );
              })}
            </ul>
          </details>
        </article>
      </section>
    </div>
  );
});

export default FlipCard;
