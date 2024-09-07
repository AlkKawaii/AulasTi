import styles from './Element.module.css';

export default function Element({ atomicNum, sym, elementName, xPos, yPos }) {
  return (
    <div
      className={styles.element}
      style={{gridRow:yPos, gridColumn:xPos}}>
      <span className={styles.atomicNum}>{atomicNum}</span>
      <span className={styles.sym}>{sym}</span>
      <span className={styles.elementName}>{elementName}</span>
    </div>
  );
}
