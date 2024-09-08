import Element from '../../components/Element';
import Container from '../../components/Container';
import styles from './Table.module.css';
import db from '../../database/periodicTable.json';
import FlipCard from '../../components/FlipCard';
import { useState } from 'react';

export default function Table() {
  const [elementInfo, setElementInfo] = useState(null);
  function changeFlipCard(elementID) {
    setElementInfo(db[elementID]);
  }

  return (
    <Container>
      <h1 className={styles.title}>Tabela Periódica</h1>
      <div className={styles.content}>
        <div className={styles.table}>
          {db.map((element, id) => (
            <Element
              key={id}
              atomicNum={element.number}
              elementName={element.name}
              sym={element.symbol}
              xPos={element.xPos}
              yPos={element.yPos}
              group={element.category}
              id={id}
              onElementClick={changeFlipCard}
            />
          ))}
        </div>
        <FlipCard info={elementInfo} />
      </div>
    </Container>
  );
}
