import styles from './Timeline.module.css';
import db from '../../assets/db/wars.json';
import TimelineBreakpoint from '../TimelineBreakpoint';

export default function Timeline({ handleBreakpointClick }) {
  return (
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
  );
}
