import styles from './Element.module.css';

export default function Element({
  atomicNum,
  sym,
  elementName,
  xPos,
  yPos,
  group,
  id,
  onElementClick,
}) {
  const groupLower = group.toLowerCase();

  function chooseColor(group) {
    if (group.includes('pós')) return '#a0a0e6';
    if (group.includes('ametal')) return '#f58282';
    if (group.includes('semi')) return '#f0f078';
    if (group.includes('terroso')) return '#82e182';
    if (group.includes('alcalino')) return '#ffc86e';
    if (group.includes('metal')) return '#e6aafa';
    if (group.includes('nobre')) return '#ffbec8';
    if (group.includes('desconhecido')) return '#e3e3e3';
    if (group.includes('lantanídeo')) return '#faaa8c';
    if (group.includes('actinídeo')) return '#91f0f0';
  }

  const color = chooseColor(groupLower);
  return (
    <div
      className={styles.element}
      onClick={() => onElementClick(id)}
      style={{
        gridRow: yPos,
        gridColumn: xPos,
        backgroundColor: color,
      }}>
      <span className={styles.atomicNum}>{atomicNum}</span>
      <span className={styles.sym}>{sym}</span>
      <span className={styles.elementName}>{elementName}</span>
    </div>
  );
}
