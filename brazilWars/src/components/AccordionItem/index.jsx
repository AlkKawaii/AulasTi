import styles from './AccordionItem.module.css';

export default function AccordionItem({ label, content, opened }) {
  return (
    <div>
      <div className={`${styles.label} ${opened ? styles.open : ''}`}>
        {label}
      </div>
      <div className={`${styles.accordion} ${opened ? styles.open : ''}`}>
        {content}
      </div>
    </div>
  );
}
