import styles from './FlipCard.module.css';

export default function FlipCard({ info }) {
  return (
    <div className={styles.flipCard}>
      <section className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>A</div>
        <article className={styles.flipCardBack}>B</article>
      </section>
    </div>
  );
}
