import Container from '../../components/Container';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Container>
        <div className={styles.content}>
          <p>Conteúdo não encontrado</p>
          <span>(っ °Д °;)っ</span>
        </div>
      </Container>
    </>
  );
}
