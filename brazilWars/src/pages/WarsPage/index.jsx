import TimeMachineContainer from '../../components/TimeMachineContainer';
import styles from './WarsPage.module.css';

export default function WarsPage({}) {
  return (
    <>
      <h1 className={styles.title}>Guerras Guerreadas</h1>
      <TimeMachineContainer />
    </>
  );
}
