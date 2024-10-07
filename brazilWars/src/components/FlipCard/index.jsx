import Accordion from '../Accordion';
import styles from './FlipCard.module.css';
import { forwardRef } from 'react';

const FlipCard = forwardRef(({ info }, ref) => {
  const mainBattles = (
    <ul>
      {info.mainBattles.map((battle, index) => {
        return (
          <li key={index} className={styles.subItem}>
            {battle}
          </li>
        );
      })}
    </ul>
  );
  const curiosities = (
    <ul>
      {info.curiosities.map((curiosity, index) => {
        return (
          <li key={index} className={styles.subItem}>
            {curiosity}
          </li>
        );
      })}
    </ul>
  );

  const description = <p>{info.description}</p>;

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
          <Accordion
            labels={['Descrição', 'Principais Conflitos', 'Curiosidades']}
            content={[description, mainBattles, curiosities]}
          />
        </article>
      </section>
    </div>
  );
});

export default FlipCard;
