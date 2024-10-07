import styles from './TimeMachineContainer.module.css';
import FlipCard from '../../components/FlipCard';
import Timeline from '../../components/Timeline';
import db from '../../assets/db/wars.json';
import { useRef } from 'react';
import Accordion from '../Accordion';

export default function TimeMachineContainer({}) {
  const cardRefs = useRef([]);
  function changeCardFocus(index) {
    const card = cardRefs.current[index];
    card.classList.add(styles.focused);
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      card.classList.remove(styles.focused);
    }, 2000);
  }

  return (
    <section>
      <Timeline handleBreakpointClick={changeCardFocus} />
      <div className={styles.cardsContainer}>
        {db.map((war, index) => {
          return (
            <FlipCard
              key={index}
              info={war}
              id={`war${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          );
        })}
      </div>
    </section>
  );
}
