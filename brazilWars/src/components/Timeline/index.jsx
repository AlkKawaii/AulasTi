import styles from './Timeline.module.css';
import db from '../../assets/db/wars.json';
import TimelineBreakpoint from '../TimelineBreakpoint';

export default function Timeline({ handleBreakpointClick }) {
  return (
    <>
      <h4 className={styles.info}>
        Clique em um ponto na linha do tempo para ser direcionado para o evento.
      </h4>
      <div className={styles.timeline}>
        {db.map((war, index) => {
          return (
            <TimelineBreakpoint
              key={index}
              year={war.year}
              handleClick={() => handleBreakpointClick(index)}
            />
          );
        })}
      </div>
    </>
  );
}
