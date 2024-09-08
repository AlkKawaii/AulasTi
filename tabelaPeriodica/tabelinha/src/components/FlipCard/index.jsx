import styles from './FlipCard.module.css';
import '@google/model-viewer';
export default function FlipCard({ info }) {
    let frontInfo;
    let backInfo;

    

  const nullInfo = <p>Clique Em Algum Elemento</p>;
  return (
    <div className={styles.flipCard}>
      <section className={styles.flipCardInner}>
        <div className={styles.flipCardFront}></div>
        <article className={styles.flipCardBack}>
          <model-viewer
            src='https://storage.googleapis.com/search-ar-edu/periodic-table/element_013_aluminum/element_013_aluminum.glb'
            alt='Modelo atômico 3D do elemento Alumínio'
            autoplay=''
            camera-controls=''
            camera-orbit='-0.6751deg 70.99deg 1.4m'
            exposure='0.3'
            field-of-view='30deg'
            max-camera-orbit='auto 180deg 1.4m'
            min-camera-orbit='auto 0deg auto'
            style={{
              width: '60%',
              height: '60%',
              margin: 'auto',
            }}></model-viewer>
        </article>
      </section>
    </div>
  );
}
