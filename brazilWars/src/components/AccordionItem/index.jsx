import styles from './AccordionItem.module.css';

export default function AccordionItem({ label, content, opened, handleClick }) {
  return (
    <div>
      <div
        className={`${styles.label} ${opened ? styles.open : ''}`}
        onClick={handleClick}>
        <span>{label}</span>{' '}
        <span className={`material-symbols-outlined ${styles.arrow}`}>
          stat_minus_1
        </span>
      </div>
      <div className={`${styles.accordion} ${opened ? styles.open : ''}`}>
        {content}
      </div>
    </div>
  );
}
