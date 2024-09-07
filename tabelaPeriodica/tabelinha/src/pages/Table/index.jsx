import Element from '../../components/Element';
import Container from '../../components/Container';
import styles from './Table.module.css';
import db from '../../database/periodicTable.json';

export default function Table() {
  return (
    <Container>
      <h1 className={styles.title}>Tabela Periódica</h1>
      <div className={styles.table}>
        {db.map((element, id) => (
          <Element
            key={id}
            atomicNum={element.number}
            elementName={element.name}
            sym={element.symbol}
            xPos={element.xPos}
            yPos={element.yPos}
          />
        ))}
      </div>
    </Container>
  );
}
